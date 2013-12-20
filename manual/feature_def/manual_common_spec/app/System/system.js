function getCountry()
{
	data = Rho.System.getProperty('country');
	$("#Rho_System_Country span.result").text(JSON.stringify(data,null," "));
}

function getapplicationIconBadge()
{
	data = Rho.System.getProperty('applicationIconBadge');
	$("#Rho_System_getapplicationIconBadge span.result").text(JSON.stringify(data,null," "));
}

function gethttpProxyURI()
{
	data = Rho.System.getProperty('httpProxyURI');
	$("#Rho_System_httpProxyURI span.result").text(JSON.stringify(data,null," "));
}


function getlockWindowSize()
{
	//data = Rho.System.getProperty('lockWindowSize');
	data = Rho.System.lockWindowSize;
	$("#Rho_System_lockWindowSize span.result").text(JSON.stringify(data,null," "));
}

function getscreenAutoRotate()
{
	data = Rho.System.getProperty('screenAutoRotate');
	$("#Rho_System_screenAutoRotate span.result").text(JSON.stringify(data,null," "));
}

function getscreenOrientation()
{
	data = Rho.System.getProperty('screenOrientation');
	$("#Rho_System_screenOrientation span.result").text(JSON.stringify(data,null," "));
}

function getscreenSleeping()
{
	data = Rho.System.getProperty('screenSleeping');
	$("#Rho_System_screenSleeping span.result").text(JSON.stringify(data,null," "));
}

function getkeyboardState()
{
	data = Rho.System.getProperty('keyboardState');
	$("#Rho_System_keyboardState span.result").text(JSON.stringify(data,null," "));
}


function callisApplicationInstalled(aString) {
    var isInstalled = Rho.System.isApplicationInstalled(aString)
    if (isInstalled)
        alert(aString + " application is installed in the device");
    else
        alert(aString + " application is not installed in the device");
}

function rhobundle_getfilename()
{
    if (Rho.System.platform == Rho.System.PLATFORM_WM_CE || Rho.System.platform == Rho.System.PLATFORM_WP8 || Rho.System.platform == Rho.System.PLATFORM_WINDOWS_DESKTOP)
    {
        return Rho.RhoFile.join( Rho.Application.bundleFolder, '/RhoBundle/upgrade_bundle.zip');
    }else
    {
        return Rho.RhoFile.join( Rho.Application.userFolder, '/RhoBundle/upgrade_bundle.zip');
    }
}

function rhobundle_download(download_url)
{
    var file_name = rhobundle_getfilename();
    var dir_name = Rho.RhoFile.dirname(file_name);
    if ( Rho.RhoFile.exists(dir_name) )
    {
        Rho.RhoFile.deleteRecursive(dir_name);
    }

    if ( !Rho.RhoFile.exists(dir_name) )
    {
        Rho.RhoFile.makeDir(dir_name);
    }

    var res = Rho.Network.downloadFile( { url : download_url, filename : file_name,  overwriteFile : true } );

    return res['status'] == 'ok';
}

function callreplaceCurrentBundle()
{
    var res = rhobundle_download(httpServerUrl+'/upgrade_bundle.zip');
    //var res = rhobundle_download('http://manual-common-spec.s3.amazonaws.com/upgrade_bundle.zip');
    if (!res)
    {
        Rho.Log.error("Cannot download bundle.", "SPEC");
        return;
    }

    if ( Rho.System.unzipFile( rhobundle_getfilename()) == 0)
    {
    	Rho.System.replaceCurrentBundle( Rho.RhoFile.dirname(rhobundle_getfilename()), {do_not_restart_app:false});
    }else
    {
        Rho.Log.error("Cannot unzip bundle.", "SPEC");
        return;
    }

}

function callupdateCurrentBundle()
{
    var res = rhobundle_download(httpServerUrl+'/upgrade_bundle_partial.zip');
    //var res = rhobundle_download('http://manual-common-spec.s3.amazonaws.com/upgrade_bundle_partial.zip');
    if (!res)
    {
        Rho.Log.error("Cannot download bundle.", "SPEC");
        return;
    }

    if ( Rho.System.unzipFile( rhobundle_getfilename()) == 0)
    {
    	Rho.System.replaceCurrentBundle( Rho.RhoFile.dirname(rhobundle_getfilename()), {do_not_restart_app:true});
    }else
    {
        Rho.Log.error("Cannot unzip bundle.", "SPEC");
        return;
    }

}



function callgetProperty(propertyName)
{
	data = Rho.System.getProperty(propertyName);
	$("#Rho_System_setproperty span.result").text(JSON.stringify(data,null," "));
}

function callsetProperties(propertyName, propertyValue)
{
    var properties = {};
    properties[propertyName] = propertyValue;
	Rho.System.setProperties(properties);
}

function callgetProperties(propertyName)
{
	data = Rho.System.getProperties([propertyName]);
	$("#Rho_System_getProperties span.result").text(JSON.stringify(data,null," "));
}

function download_filetolocal(srvHttpDownloadImageUrl, filetoinstall)
{
	var file = filetoinstall;
	var fname = Rho.RhoFile.join(Rho.Application.userFolder, file);
	downloadfileProps = {
                url: srvHttpDownloadImageUrl,
                filename: fname,
                overwriteFile: true
            };

    Rho.Network.downloadFile(downloadfileProps);
	return fname;
}

function createFileWithDoNotBackupAttribute(doBackup)
{
    var fPath = Rho.RhoFile.join(Rho.Application.userFolder, "testBackupFile.txt");

    if (Rho.RhoFile.exists(fPath))
    {
        Rho.RhoFile.deleteFile(fPath);
    };

    var fOpen = new Rho.RhoFile(fPath,Rho.RhoFile.OPEN_FOR_APPEND);
    var writeValue = fOpen.write("Do not backup file is set to " + doBackup);
    fOpen.close();

    return Rho.System.setDoNotBackupAttribute(fPath, doBackup);
}

function isBackupFileExists()
{
    var fPath = Rho.RhoFile.join(Rho.Application.userFolder, "testBackupFile.txt");

    return Rho.RhoFile.exists(fPath);
}

function checkBackupFileExists()
{
    $("#Rho_System_DoNotBackupAttribute span.result").text(JSON.stringify(isBackupFileExists()));
}

var getAppNameTosendMessage = function(){
    var appName = undefined;
    if(isAndroidPlatform()){
        appName = "com.rhomobile.intent"
    }
    else if(isApplePlatform()){
        appName = "Intent"
    }
    else if(isWindowsMobilePlatform()){
        appName = "rhomobile Intent/Intent.exe"
    }

    return appName;
}

//This method will give you the base64 encoded data for Images
var getBase64FromImageUrl = function(URL) {
    var img = new Image();
    img.src = URL;
    img.onload = function () {

        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL("image/png");
        dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        return dataURL;
    }
}

var sendJSONStringToTarget = function(){
    Rho.System.sendApplicationMessage(getAppNameTosendMessage(), 'data={"Users":[{"Name":"user999","Value":"test"},{"Name":"test2","Value":"test"}]}');
}

var getGPSCoordinates = function(){
    Rho.System.sendApplicationMessage(getAppNameTosendMessage(),'GPS=true');
    Rho.System.startApplicationMessageNotifications(function(geodata){
        if(document.getElementById('geodiv')){
            document.getElementById('geodiv').innerHTML = "Latitude= "+geodata.latitude+"Longitude= "+geodata.longitude;
        }
    });
}

var scanBarcode = function(){
    Rho.System.sendApplicationMessage(getAppNameTosendMessage(),'SCAN=true');
    Rho.System.startApplicationMessageNotifications(function(scandata){
        if(document.getElementById('scandiv')){
            document.getElementById('scandiv').innerHTML = "Data= "+scandata;
        }
    });
}

var getNonRhodesApp = function(){
    var appName = undefined;
    if(isAndroidPlatform()){
        appName = "com.android.music"
    }
    else if(isApplePlatform()){
        appName = "Safari"
    }
    else if(isWindowsMobilePlatform()){
        appName = "Internet Exlporer.exe"
    }

    return appName;
}

