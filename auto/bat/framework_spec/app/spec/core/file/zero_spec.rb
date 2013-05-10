require File.expand_path('../../../spec_helper', __FILE__)
require File.expand_path('../../../shared/file/zero', __FILE__)

describe "File.zero?" do
  it_behaves_like :file_zero, :zero?, File
  it_behaves_like :file_zero_missing, :zero?, File
end
