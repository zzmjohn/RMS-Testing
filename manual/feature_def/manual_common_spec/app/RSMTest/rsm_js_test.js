function testPassed()
{
	document.getElementById("actResult").innerHTML = "pass";
}

function testFailed()
{
	document.getElementById("actResult").innerHTML = "fail";
}

function setObjective(objective)
{
	document.getElementById("objective").innerHTML = objective;
}

function setInstruction(instruction)
{
	document.getElementById("instruction").innerHTML = instruction;
}

function setExpected(expected)
{
	document.getElementById("expResult").innerHTML = expected;
}

function enablecallbackdata(data)
{
	document.getElementById("clbkData").innerHTML = data;
}	
var rsm_get_property_unknown_return = [
{
	testName		:	"VT400-1001 | Get rsmModelNumber | ",
	propertyName	:	"rsmModelNumber",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1002 | Get rsmSerialNumber | ",
	propertyName	:	"rsmSerialNumber",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1003 | Get rsmDateOfManufacture | ",
	propertyName	:	"rsmDateOfManufacture",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1004 | Get rsmDateOfService | ",
	propertyName	:	"rsmDateOfService",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1005 | Get rsmBluetoothAddress | ",
	propertyName	:	"rsmBluetoothAddress",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1006 | Get rsmFirmwareVersion | ",
	propertyName	:	"rsmFirmwareVersion",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1007 | Get rsmDeviceClass | ",
	propertyName	:	"rsmDeviceClass",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1008 | Get rsmBatteryStatus | ",
	propertyName	:	"rsmBatteryStatus",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1009 | Set rsmBatteryCapacity | ",
	propertyName	:	"rsmBatteryCapacity",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
},
{
	testName		:	"VT400-1010 | Get rsmBatteryId | ",
	propertyName	:	"rsmBatteryId",
	scannerTypes	:	"RSM Bluetooth",
	OSTypes			:	"WINDOWS",
	propertyValue	:	"Readonly",
	expectedResult	:	"Unknown"
}
];
var getApplicableReadOnlyProperties = function (objScnType){
	
	var isAndroid = (Rho.System.platform == "ANDROID");
	var deviceScannerType = objScnType.getProperty('friendlyName');
	var finalReadSCNObj = [];

	for (var i = 0; i < rsm_get_property_unknown_return.length ; i++){

		if(rsm_get_property_unknown_return[i]['OSTypes'] == 'WINDOWS')
		{
			finalReadSCNObj.push(rsm_get_property_unknown_return[i]);
		}
	}

	return finalReadSCNObj;
}