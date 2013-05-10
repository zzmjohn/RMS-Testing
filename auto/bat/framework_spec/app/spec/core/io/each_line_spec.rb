require File.expand_path('../../../spec_helper', __FILE__)
require File.expand_path('../fixtures/classes', __FILE__)
require File.expand_path('../shared/each', __FILE__)

if System.get_property('platform') != 'ANDROID'
describe "IO#each_line" do
  it_behaves_like :io_each, :each_line
end

describe "IO#each_line" do
  it_behaves_like :io_each_default_separator, :each_line
end
end