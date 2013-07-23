require 'yaml'
require 'fileutils'

# push type: Rhoconnect Push Service (rps) | Google Cloud Messaging (gcm)
push_type = (ARGV[0].nil?) ?  "rps" : ARGV[0]
unless push_type == 'rps' || push_type == 'gcm'
  puts "Invalid param: 'rps' or 'gcm' expected"
  exit
end
TEST_PKGS = %w[ com.rhomobile.push_client_js ]
TEST_PKGS << 'com.motsolutions.cto.services.ans' if push_type == "rps"

puts "Running push specs for #{(push_type == "rps") ?  'Rhoconnect Push' : 'Google Cloud Messaging'} Service"

$rho_root = nil
cfgfilename = File.join(File.dirname(__FILE__),'config.yml')
if File.file?(cfgfilename)
  config = YAML::load_file(cfgfilename)
  $rho_root = config["rhodes"]
  $rhoconnect_root = config["rhoconnect"]
  $rho_root = File.expand_path($rho_root) if $rho_root
  $rhoconnect_root = File.expand_path($rhoconnect_root) if $rhoconnect_root
  $rhoelements_root = config["rhoelements"]
  $rhoelements_root = File.expand_path($rhoelements_root) if $rhoelements_root
end
$rho_root = `get-rhodes-info --rhodes-path`.chomp unless $rho_root
# puts "rhodes location: #{$rho_root}"
# puts "rhoconnect location:  #{$rhoconnect_root}"
# puts "rhoelements location: #{$rhoelements_root}"

require File.join($rho_root,'lib','build','jake.rb')
require File.join($rho_root,'platform','android','build','android_tools.rb')
require_relative './rhoconnect_helper'

$spec_path = FileUtils.pwd
$platform = 'android'
appname = "push_client_js"
$app_path = File.expand_path(File.join(File.dirname(__FILE__),appname))

RhoconnectHelper.set_enable_redis(false)
RhoconnectHelper.set_enable_resque(false)
RhoconnectHelper.set_enable_push(false) if push_type == "gcm"

# Patching rhodes 'rhoconfig.txt' file
cfgfile = File.join($app_path, 'rhoconfig.txt')
cfg = File.read(cfgfile)
cfg.gsub!(/(syncserver.*)/, "syncserver = 'http://#{RhoconnectHelper.host}:#{RhoconnectHelper.port}'")
cfg.gsub!(/(Push.rhoconnect.pushServer.*)/, "Push.rhoconnect.pushServer = 'http://#{RhoconnectHelper.push_host}:#{RhoconnectHelper.push_port}'")
File.open(cfgfile, 'w') { |f| f.write cfg }
# Select proper build file for rhodes app
if push_type == "rps"
  FileUtils.cp(File.join($app_path, 'build.yml.rps'), File.join($app_path, 'build.yml'))
else  # "gcm"
  FileUtils.cp(File.join($app_path, 'build.yml.gcm'), File.join($app_path, 'build.yml'))
end

###############################
$server     = nil
$requests   = []
$signal     = ConditionVariable.new
$mutex      = Mutex.new

puts "-- Starting local server"
$server, addr, port = Jake.run_local_server(8081)
$server.mount_proc('/', nil) do |req, res|
  query = req.query
  # puts "Local server:"
  # puts " Headers: #{req.header.inspect}"
  # puts " Query: #{query.inspect}"
  res.status = 200
  $mutex.synchronize do
    $requests << req
    $signal.signal
  end
end

def expect_request(name, timeout=30)
  val = nil
  $mutex.synchronize do
    $signal.wait($mutex, timeout) # wait timeout 30 secs.
    val = $requests.first.query[name] if $requests.count != 0
    $requests.clear
  end
  val
end

def report_results(timeout=30)
  results = nil
  $mutex.synchronize do
    $signal.wait($mutex, timeout) # wait timeout
    results = $requests.first.query if $requests.count != 0
    $requests.clear
  end
  results
end
###############################

# Patching servers.js
servers = <<_SERVERS_
var SYNC_SERVER_HOST  = "#{RhoconnectHelper.host}";
var SYNC_SERVER_PORT  = #{RhoconnectHelper.port};
var LOCAL_SERVER_HOST = "#{addr}";
var LOCAL_SERVER_PORT = #{port};
_SERVERS_
File.open(File.join($app_path, 'public', 'app', 'servers.js'), 'w') { |f| f << servers }

FileUtils.chdir File.join($spec_path, appname)
puts "\nBuilding rhodes app ..."
puts "rake device:#{$platform}:debug"
raise "Failed to build rhodes app" unless system("rake device:#{$platform}:debug")
FileUtils.chdir $spec_path

$deviceId = nil
$deviceOpts = '-e'
out = `adb devices`
device_list = out.split("\n")
device_list.shift # skip "List of devices attached "
device_list << '' if device_list.empty?
device_list.each do |dev|
  puts
  if dev == ''
    puts "-- Running push specs on android emulator"
  else
    $deviceId = dev.split("\t")[0]
    $deviceOpts = "-s #{$deviceId}"
    puts "-- Running push specs on device #{$deviceId}"
  end

  RhoconnectHelper.stop_rhoconnect_stack
  $tmp_path = File.join(File.dirname(__FILE__),'tmp')
  FileUtils.mkdir_p File.expand_path($tmp_path) unless File.exists?($tmp_path)
  $server_path = File.expand_path(File.join($tmp_path,'testapp'))
  FileUtils.rm_r $server_path if File.exists?($server_path)

  RhoconnectHelper.set_rhoconnect_bin "#{$rhoconnect_root}/bin/rhoconnect"
  puts "Generating rhoconnect app ..."
  test_appname = "testapp"
  res = RhoconnectHelper.generate_app($tmp_path, test_appname)
  puts "bundle install"
  Kernel.system("bundle", "install", :chdir => $server_path)

  # Copy setting.yml file with :gcm_api_key to 'testapp/settings' directory if running tests GCM service
  FileUtils.cp('settings.yml', File.join($server_path, 'settings')) if push_type == "gcm"

  RhoconnectHelper.set_rc_push_out File.open( File.join($app_path, "rhoconnect_push.log" ), "w")
  RhoconnectHelper.set_rc_out(File.open( File.join($app_path, "rhoconnect.log" ), "w"),
      File.open( File.join($app_path, "rhoconnect_err.log" ), "w"))

  RhoconnectHelper.start_rhoconnect_stack($server_path, true)
  @api_token = RhoconnectHelper.api_post('system/login', { :login => 'rhoadmin', :password => '' })

  FileUtils.chdir File.join($spec_path, appname)
  if $deviceId
    TEST_PKGS.each do |pkg|
      out = `adb #{$deviceOpts} shell pm list packages #{pkg}`
      unless out.empty?
        puts "Uninstalling package #{pkg} ..."
        system "adb #{$deviceOpts} uninstall #{pkg}"
      end
    end

    if push_type == "rps"
      puts "Install rhoconnect push service ..."
      push_service_apk = File.join($rhoelements_root,'libs','rhoconnect-push-service','rhoconnect-push-service.apk')
      system("adb #{$deviceOpts} install -r #{push_service_apk}")
    end
    puts "adb #{$deviceOpts} install -r #{Dir.pwd}/bin/target/android/push_client_js-debug.apk"
    system("adb #{$deviceOpts} install -r #{Dir.pwd}/bin/target/android/push_client_js-debug.apk")
    puts "\nStarting rhodes app on device ..."
    puts "adb #{$deviceOpts} shell am start -a android.intent.action.MAIN -n com.rhomobile.push_client_js/com.rhomobile.rhodes.RhodesActivity"
    system("adb #{$deviceOpts} shell am start -a android.intent.action.MAIN -n com.rhomobile.push_client_js/com.rhomobile.rhodes.RhodesActivity")

    rhodes_log = File.join($spec_path, appname, 'rholog.txt')
    File.unlink(rhodes_log) if File.exists?(rhodes_log)
    $logcat_pid = Kernel.spawn("adb #{$deviceOpts} logcat", :out => File.open(rhodes_log, "w"))
    puts "Starting logcat process with pid: #{$logcat_pid}"
  else
    # Using emulator
    load File.join($rho_root,'Rakefile')
    load File.join($rho_root,'platform','android','build','android.rake')

    puts "Configure android emulator ..."
    Rake::Task["config:android:emulator"].invoke
    AndroidTools.run_emulator( :wipe => true )
    TEST_PKGS.each do |pkg|
      out = `adb -e shell pm list packages #{pkg}`
      unless out.empty?
        puts "Uninstalling package #{pkg} ..."
        system "adb -e uninstall #{pkg}"
      end
    end
    if push_type == "rps"
      puts "Install rhoconnect push service"
      push_service_apk = File.join($rhoelements_root,'libs','rhoconnect-push-service','rhoconnect-push-service.apk')
      AndroidTools.load_app_and_run("-e", push_service_apk, "")
    end

    puts 'Building and starting rhodes application ...'
    system("rake run:#{$platform}")
  end
  FileUtils.chdir $spec_path

  # TODO: wait test results on device/emulator and publish them here
  puts
  puts "Waiting for Jasmine Spec Runner on device ..."
  res = expect_request('status')
  puts "Jasmine Spec Runner is running on device ..." if res == "start"

  results = report_results(300)

  # Shutdown test stack ...
  RhoconnectHelper.stop_rhoconnect_stack
  FileUtils.rm_r $server_path if File.exists? $server_path
  TEST_PKGS.each do |pkg|
    puts "Uninstalling package #{pkg} ..."
    system "adb #{$deviceOpts} uninstall #{pkg}"
  end
  puts "Stopping local server"
  $server.shutdown
  `adb emu kill` if $deviceOpts == '-e' # running emulator
  system "kill -9 #{$logcat_pid}" if $logcat_pid

  # Print report
  if results
    puts
    puts "Test Results:"
    puts "*** Total:  #{results['total']}"
    puts "*** Passed: #{results['passed']}"
    puts "*** Failed: #{results['failed']}"
    puts
  else
    puts "No test results are available. Make sure that phone is connected to internet."
    exit -1
  end
  if results['failed'].to_i != 0
    puts "Jasmine specs are failed."
    exit -1
  end

end