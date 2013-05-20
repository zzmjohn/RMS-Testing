var scannerparams = new Array;

scannerparams[scannerparams.length] = [["VT282-1754","Enumerate Scanner with async callback"],
["Barcode","enumerate","method","url_for(:action => :enumCallbackCommon)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1755","Enumerate Scanner with async callback using anonymous function(lamdba)"],
["Barcode","enumerate","method","enumCallbackCommon","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1758","Enumerate Scanner with sync callback"],
["Barcode","enumerate","method","enumCallbackCommon","sync"]
]
scannerparams[scannerparams.length] = [["VT282-1762","Enable with async callback","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1763","Enable without callback","true"],
["Barcode","enable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1764","Enable with alldecoders enabled and callback"],
["Barcode","enable","method","{'allDecoders'=>true}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1765","Enable with picklist software reticle, scantimeout 7000 and callback as params"],
["Barcode","enable","method","{'picklistMode' => 'softwareReticle', 'scanTimeout' => 7000}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1766","Enable with alldecoders disabled, code128 as enabled without callback as params"],
["Barcode","enable","method","{'allDecoders'=>false, 'code128' => true}","async"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'code128'|returnGetProperty","sync"]
]


scannerparams[scannerparams.length] = [["VT282-1769","Enable with async anonymous callback"],
["Barcode","enable","method","{}|scanCallbackCommon","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1770","Enable with picklist software reticle, scantimeout 7000 and async anonymous callback as params"],
["Barcode","enable","method","{'picklistMode' => 'softwareReticle', 'scanTimeout' => 7000}|scanCallbackCommon","lambda"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1771","set picklist software reticle, scantimeout 7000 after calling enable"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'softwareReticle'"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"],
["Barcode","setProperty","method","'scanTimeout', '7000'"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1772","Enable with alldecoders disabled, code128 as enabled with sync access"],
["Barcode","enable","method","{'allDecoders'=>false, 'code128' => true}","sync"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'code128'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1774","Enable SCN1"],
["BarcodeApi","enable","method","'SCN1'"]
]

scannerparams[scannerparams.length] = [["VT282-1775","Enable SCN2"],
["BarcodeApi","enable","method","'SCN2'"]
]

scannerparams[scannerparams.length] = [["VT282-1776","Enable SCN3"],
["BarcodeApi","enable","method","'SCN3'"]
]

scannerparams[scannerparams.length] = [["VT282-1777","Enable invalid Scanner"],
["BarcodeApi","enable","method","'Scanner5'"]
]

scannerparams[scannerparams.length] = [["VT282-1778","call setDefault with SCN1 and take"],
["BarcodeApi","makeSCN1Default","method"],
["Barcode","take","method","{}, url_for(:action => :scanCallbackCommon)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1779","call setDefault with SCN2 and take"],
["BarcodeApi","makeSCN2Default","method"],
["Barcode","take","method","{}, url_for(:action => :scanCallbackCommon)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1780","call setDefault with SCN3 and take"],
["BarcodeApi","makeSCN3Default","method"],
["Barcode","take","method","{}, url_for(:action => :scanCallbackCommon)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1781","call setDefault with SCN1 and enable"],
["BarcodeApi","makeSCN1Default","method"],
["Barcode","enable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1782","call setDefault with SCN2 and enable"],
["BarcodeApi","makeSCN2Default","method"],
["Barcode","enable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1783","call setDefault with SCN3 and enable"],
["BarcodeApi","makeSCN3Default","method"],
["Barcode","enable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1784","Start and stop scanner for laser/Imager scanner"],
["BarcodeApi","makeSCN1Default","method"],
["Rho::Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Rho::Barcode","start","method"],
["Rho::Barcode","stop","method"]
]

scannerparams[scannerparams.length] = [["VT282-1785","Start and stop scanner for camera scanner"],
["BarcodeApi","makeSCN2Default","method"],
["Rho::Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Rho::Barcode","start","method"],
["Rho::Barcode","stop","method"]
]

scannerparams[scannerparams.length] = [["VT282-1786","Start and stop scanner for BT scanner"],
["BarcodeApi","makeSCN3Default","method"],
["Rho::Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Rho::Barcode","start","method"],
["Rho::Barcode","stop","method"]
]

scannerparams[scannerparams.length] = [["VT282-1787","Disable SCN1"],
["BarcodeApi","makeSCN1Default","method"],
["Rho::Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Rho::Barcode","disable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1788","Disable SCN2"],
["BarcodeApi","makeSCN2Default","method"],
["Rho::Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Rho::Barcode","disable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1789","Disable SCN3"],
["BarcodeApi","makeSCN3Default","method"],
["Rho::Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Rho::Barcode","disable","method"]
]

scannerparams[scannerparams.length] = [["VT282-1790","take with callback"],
["Barcode","take","method","{}, url_for(:action => :scanCallbackCommon)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1792","take with alldecoders enabled and callback"],
["Barcode","take","method","{'allDecoders'=>true}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1793","take with picklist software reticle, scantimeout 7000 and callback"],
["Barcode","take","method","{'picklistMode' => 'softwareReticle', 'scanTimeout' => 7000}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1797","Take with async anonymous callback"],
["Barcode","take","method","{}|scanCallbackCommon","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1806","All Decoders true through getproperty with sync access"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'true'"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1807","All Decoders false through getproperty with sync access"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'false'"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1808","All Decoders true through getproperty with async callback"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'true'"],
["Barcode","getProperty","method","'allDecoders', url_for(:action => :returnGetProperty)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1809","All Decoders false through getproperty with async callback"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'false'"],
["Barcode","getProperty","method","'allDecoders', url_for(:action => :returnGetProperty)","async"]
]

scannerparams[scannerparams.length] = [["VT282-1810","All Decoders true through getproperty with async anonymous callback"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'true'"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1811","All Decoders false through getproperty with async anonymous callback"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'false'"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1812","All Decoders and Autoenter getproperties with async callback"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'true'"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","lambda"],
["Barcode","setProperty","method","'autoEnter', 'false'"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1813","All Decoders and Autoenter getproperties with async anonymous callback"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'allDecoders', 'true'"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","lambda"],
["Barcode","setProperty","method","'autoEnter', 'true'"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","lambda"]
]

scannerparams[scannerparams.length] = [["VT282-1814","auotenter true with setproperty"],
["Barcode","enable","method"],
["Barcode","setProperty","method","'autoEnter', 'true'"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1815","auotenter false with setproperty"],
["Barcode","enable","method"],
["Barcode","setProperty","method","'autoEnter', 'false'"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","sync"]
]


scannerparams[scannerparams.length] = [["VT282-1816","autotab true with setproperty"],
["Barcode","enable","method"],
["Barcode","setProperty","method","'autoTab', 'true'"],
["Barcode","getProperty","method","'autoTab'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1817","autotab false with setproperty"],
["Barcode","enable","method"],
["Barcode","setProperty","method","'autoTab', 'false'"],
["Barcode","getProperty","method","'autoTab'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1818","auotenter true with set"],
["Barcode","enable","method"],
["Barcode","autoEnter","true"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1819","auotenter false with set"],
["Barcode","enable","method"],
["Barcode","autoEnter","false"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1820","autotab true with set"],
["Barcode","enable","method"],
["Barcode","autoTab","true"],
["Barcode","getProperty","method","'autoTab'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1821","autotab false with set"],
["Barcode","enable","method"],
["Barcode","autoTab","false"],
["Barcode","getProperty","method","'autoTab'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1822","auotenter and autotab with getproperties and setproperties"],
["Barcode","enable","method"],
["Barcode","getProperties","method","['autoEnter','autoTab']|returnGetProperty","sync"],
["Barcode","setProperties","method","{'autoEnter'=>true, 'autoTab' => false}"],
["Barcode","getProperties","method","['autoEnter','autoTab']|returnGetProperty","sync"]
]


scannerparams[scannerparams.length] = [["VT282-1824","autotab true with getproperties"],
["Barcode","enable","method"],
["Barcode","autoTab","true"],
["Barcode","getProperties","method","['autoTab']|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1825","auotenter and autotab with getproperty and setproperty"],
["Barcode","enable","method"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","sync"],
["Barcode","getProperty","method","'autoTab'|returnGetProperty","sync"],
["Barcode","setProperty","method","'autoEnter', 'true'"],
["Barcode","getProperty","method","'autoEnter'|returnGetProperty","sync"],
["Barcode","setProperty","method","'autoTab', 'true'"],
["Barcode","getProperty","method","'autoTab'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1826","Enable with autoenter and no callback"],
["Barcode","enable","method","{'autoEnter'=>true}"],
["Barcode","getProperty","method","'allDecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'code128'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-1827","Enable with autotab and no callback"],
["Barcode","enable","method","{'autoTab'=>true}"],
]



//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////   Testcases To Check Functionality Using SetProperty   ///////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

scannerparams[scannerparams.length] = [["VT282-2015","call setproperty with rastermode:none","none"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'rasterMode', 'none'"],
["Barcode","getProperty","method","'rasterMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2016","call setproperty with rastermode:openAlways","openAlways"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'rasterMode', 'openAlways'"],
["Barcode","getProperty","method","'rasterMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2018","call setproperty with rastermode:cyclone","cyclone"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'rasterMode', 'cyclone'"],
["Barcode","getProperty","method","'rasterMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2019","call setproperty with rasterHeight to 50","50"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'rasterMode', 'openAlways'"],
["Barcode","setProperty","method","'rasterHeight', 50"],
["Barcode","getProperty","method","'rasterHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2020","call setproperty with rasterHeight to 0","0"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'rasterMode', 'openAlways'"],
["Barcode","setProperty","method","'rasterHeight', 0"],
["Barcode","getProperty","method","'rasterHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2021","call setproperty with rasterHeight to 100","100"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'rasterMode', 'openAlways'"],
["Barcode","setProperty","method","'rasterHeight', 100"],
["Barcode","getProperty","method","'rasterHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2022","call setproperty with aimMode as none","none"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimMode', 'none'"],
["Barcode","getProperty","method","'aimMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2023","call setproperty with aimMode as dot","dot"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimMode', 'dot'"],
["Barcode","getProperty","method","'aimMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2024","call setproperty with aimMode as slab","slab"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimMode', 'slab'"],
["Barcode","getProperty","method","'aimMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2025","call setproperty with aimMode as reticle","reticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimMode', 'reticle'"],
["Barcode","getProperty","method","'aimMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2026","call setproperty with dpmMode as true","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'dpmMode', 'true'"],
["Barcode","getProperty","method","'dpmMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2027","call setproperty with dpmMode as false","false"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'dpmMode', 'false'"],
["Barcode","getProperty","method","'dpmMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2028","call setproperty with focusMode to Fixed","fixed"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'focusMode', 'fixed'"],
["Barcode","getProperty","method","'focusMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2029","call setproperty with focusMode to auto","auto"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'focusMode', 'auto'"],
["Barcode","getProperty","method","'focusMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2030","call setproperty with illuminationMode to auto","auto"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'illuminationMode', 'auto'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2031","call setproperty with illuminationMode to alwaysOff","alwaysOff"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'illuminationMode', 'alwaysOff'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2032","call setproperty with illuminationMode to alwaysOn","alwaysOn"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'illuminationMode', 'alwaysOn'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2033","call setproperty with illuminationMode to alwaysOff after alwaysOn"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'illuminationMode', 'alwaysOn'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"],
["Barcode","setProperty","method","'illuminationMode', 'alwaysOff'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2034","call setproperty with illumination mode to alwaysOn after alwaysOff"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'illuminationMode', 'alwaysOff'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"],
["Barcode","setProperty","method","'illuminationMode', 'alwaysOn'"],
["Barcode","getProperty","method","'illuminationMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2035","call setproperty with inverse1dMode to enabled","enabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'inverse1dMode', 'enabled'"],
["Barcode","getProperty","method","'inverse1dMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2036","call setproperty with inverse1dMode to disabled","disabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'inverse1dMode', 'disabled'"],
["Barcode","getProperty","method","'inverse1dMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2037","call setproperty with inverse1dMode to auto","auto"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'inverse1dMode', 'auto'"],
["Barcode","getProperty","method","'inverse1dMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2038","call setproperty with linearSecurityLevel to redundancyAndLength","redundancyAndLength"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'linearSecurityLevel', 'redundancyAndLength'"],
["Barcode","getProperty","method","'linearSecurityLevel'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2039","call setproperty with linearSecurityLevel to shortOrCodabar","shortOrCodabar"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'linearSecurityLevel', 'shortOrCodabar'"],
["Barcode","getProperty","method","'linearSecurityLevel'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2040","call setproperty with linearSecurityLevel to longAndShort","longAndShort"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'linearSecurityLevel', 'longAndShort'"],
["Barcode","getProperty","method","'linearSecurityLevel'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2041","call setproperty with linearSecurityLevel to allTwice","allTwice"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'linearSecurityLevel', 'allTwice'"],
["Barcode","getProperty","method","'linearSecurityLevel'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2042","call setproperty with linearSecurityLevel to allThrice","allThrice"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'linearSecurityLevel', 'allThrice'"],
["Barcode","getProperty","method","'linearSecurityLevel'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2043","call setproperty with picklistMode as disabled","disabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'disabled'"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2044","call setproperty with picklistMode as hardwareReticle","hardwareReticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'hardwareReticle'"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2045","call setproperty with picklistMode as softwareReticle","softwareReticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'softwareReticle'"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2046","call setproperty with picklistMode as disabled after softwareReticle","disabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'softwareReticle'"],
["Barcode","setProperty","method","'picklistMode', 'disabled'"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2047","call setproperty with poorQuality1dMode to true","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'poorQuality1dMode', 'true'"],
["Barcode","getProperty","method","'poorQuality1dMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2048","call setproperty with poorQuality1dMode to false","false"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'poorQuality1dMode', 'false'"],
["Barcode","getProperty","method","'poorQuality1dMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2049","call setproperty with viewfinderMode disabled","disabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'disabled'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2050","call setproperty with viewfinderMode enabled","enabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'enabled'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2051","call setproperty with viewfinderMode staticReticle","staticReticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'staticReticle'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2052","call setproperty with viewfinderMode dynamicReticle","dynamicReticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'dynamicReticle'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2053","call setproperty with viewfinderMode to staticReticle and viewfinderFeedback to Reticle","reticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'staticReticle'"],
["Barcode","setProperty","method","'viewfinderFeedback', 'reticle'"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '3000'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2053","call setproperty with viewfinderMode to staticReticle and viewfinderFeedback to Reticle","reticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'staticReticle'"],
["Barcode","setProperty","method","'viewfinderFeedback', 'reticle'"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '3000'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2054","call setproperty with viewfinderMode to dynamicReticle and viewfinderFeedback to Reticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'dynamicReticle'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"],
["Barcode","setProperty","method","'viewfinderFeedback', 'reticle'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '3000'"],
["Barcode","getProperty","method","'viewfinderFeedbackTime'|returnGetProperty","sync"],
]

scannerparams[scannerparams.length] = [["VT282-2055","call setproperty with viewfinderMode to staticReticle and viewfinderFeedback  enabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'staticReticle'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"],
["Barcode","setProperty","method","'viewfinderFeedback', 'enabled'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '5000'"],
["Barcode","getProperty","method","'viewfinderFeedbackTime'|returnGetProperty","sync"],
]

scannerparams[scannerparams.length] = [["VT282-2056","call setproperty with viewfinderMode to dynamicReticle and viewfinderFeedback enabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderMode', 'dynamicReticle'"],
["Barcode","getProperty","method","'viewfinderMode'|returnGetProperty","sync"],
["Barcode","setProperty","method","'viewfinderFeedback', 'enabled'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '5000'"],
["Barcode","getProperty","method","'viewfinderFeedbackTime'|returnGetProperty","sync"],
]
 
scannerparams[scannerparams.length] = [["VT282-2063","call setproperty with viewfinderMode to dynamicReticle and viewfinderFeedback enabled","disabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderFeedback', 'disabled'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2064","call setproperty with viewfinderFeedback as enabled","enabled"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderFeedback', 'enabled'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2065","call setproperty with viewfinderFeedback as reticle","reticle"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderFeedback', 'reticle'"],
["Barcode","getProperty","method","'viewfinderFeedback'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2066","call setproperty with viewfinderFeedbackTime to 5sec","5000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderFeedback', 'enabled'"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '5000'"],
["Barcode","getProperty","method","'viewfinderFeedbackTime'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2067","call setproperty with viewfinderFeedbackTime to 10000msec","5000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderFeedback', 'reticle'"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '10000'"],
["Barcode","getProperty","method","'viewfinderFeedbackTime'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2068","call setproperty with viewfinderFeedbackTime to -5000",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'viewfinderFeedback', 'enabled'"],
["Barcode","setProperty","method","'viewfinderFeedbackTime', '-5000'"],
["Barcode","getProperty","method","'viewfinderFeedbackTime'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2069","call setproperty with scanTimeout to 3 sec","3000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'scanTimeout', '3000'"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2070","call setproperty with scanTimeout to 10sec","10000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'scanTimeout', '10000'"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2071","don't call setproperty with scanTimeout (default)",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2072","call setproperty with bidirectionalRedundancy to true","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'bidirectionalRedundancy', 'true'"],
["Barcode","getProperty","method","'bidirectionalRedundancy'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2073","call setproperty with bidirectionalRedundancy to false","false"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'bidirectionalRedundancy', 'false'"],
["Barcode","getProperty","method","'bidirectionalRedundancy'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2074","call setproperty with klasseEins to true","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'klasseEins', 'true'"],
["Barcode","getProperty","method","'klasseEins'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2075","call setproperty with klasseEins to false","false"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'klasseEins', 'false'"],
["Barcode","getProperty","method","'klasseEins'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2076","default sameSymbolTimeout and differentSymbolTimeout","continuousRead"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'continuousRead'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2077","call setproperty with valid sameSymbolTimeout and differentSymbolTimeout",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'continuousRead'"],
["Barcode","setProperty","method","'sameSymbolTimeout', '5000'"],
["Barcode","setProperty","method","'differentSymbolTimeout', '2000'"],
["Barcode","getProperty","method","'sameSymbolTimeout'|returnGetProperty","sync"],
["Barcode","getProperty","method","'differentSymbolTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2078","call setproperty with negative sameSymbolTimeout and differentSymbolTimeout",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'continuousRead'"],
["Barcode","setProperty","method","'sameSymbolTimeout', '-5000'"],
["Barcode","setProperty","method","'differentSymbolTimeout', '-2000'"],
["Barcode","getProperty","method","'sameSymbolTimeout'|returnGetProperty","sync"],
["Barcode","getProperty","method","'differentSymbolTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2079","call setproperty with 0 for sameSymbolTimeout and differentSymbolTimeout",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'continuousRead'"],
["Barcode","setProperty","method","'sameSymbolTimeout', '0'"],
["Barcode","setProperty","method","'differentSymbolTimeout', '0'"],
["Barcode","getProperty","method","'sameSymbolTimeout'|returnGetProperty","sync"],
["Barcode","getProperty","method","'differentSymbolTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2080","sameSymbolTimeout and differentSymbolTimeout with aimtype trigger",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'trigger'"],
["Barcode","setProperty","method","'sameSymbolTimeout', '1000'"],
["Barcode","setProperty","method","'differentSymbolTimeout', '1000'"],
["Barcode","getProperty","method","'sameSymbolTimeout'|returnGetProperty","sync"],
["Barcode","getProperty","method","'differentSymbolTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2081","call setproperty with adaptiveScanning to false.","false"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'adaptiveScanning', 'false'"],
["Barcode","getProperty","method","'adaptiveScanning'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2082","call setproperty with adaptiveScanning to True.","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'adaptiveScanning', 'true'"],
["Barcode","getProperty","method","'adaptiveScanning'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2083","call setproperty with dbpMode to normal","true"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'dbpMode', 'normal'"],
["Barcode","getProperty","method","'dbpMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2084","call setproperty with dbpMode to composite","composite"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'dbpMode', 'composite'"],
["Barcode","getProperty","method","'dbpMode'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2085","call setproperty with timedAimDuration to 4sec with aimType:timedHold",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'timedHold'"],
["Barcode","setProperty","method","'timedAimDuration', '4000'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"],
["Barcode","getProperty","method","'timedAimDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2086","call setproperty with timedAimDuration to 3 secwith aimType:timedRelease",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'timedRelease'"],
["Barcode","setProperty","method","'timedAimDuration', '3000'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"],
["Barcode","getProperty","method","'timedAimDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2087","call setproperty with timedAimDuration to 7 sec with aimType:timedRelease",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'timedRelease'"],
["Barcode","setProperty","method","'timedAimDuration', '7000'"],
["Barcode","setProperty","method","'scanTimeout', '10000'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"],
["Barcode","getProperty","method","'timedAimDuration'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2088","call setproperty with aimtype:timedHold","timedHold"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'timedHold'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2089","call setproperty with aimtype:timedRelease","timedRelease"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'timedRelease'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2090","call setproperty with aimtype::presentation","presentation"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'presentation'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2091","call setproperty with aimtype::pressAndRelease","pressAndRelease"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'pressAndRelease'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2092","call setproperty with aimtype::pressAndRelease with valid scantimeout",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'pressAndRelease'"],
["Barcode","setProperty","method","'scanTimeout', '8000'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2093","call setproperty with aimtype::continuousRead","continuousRead"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'continuousRead'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2094","call setproperty with aimtype::trigger","trigger"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'aimType', 'trigger'"],
["Barcode","getProperty","method","'aimType'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2095","call setproperty with beamWidth to normal","normal"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'beamWidth', 'normal'"],
["Barcode","getProperty","method","'beamWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2096","call setproperty with beamWidth  to narrow","narrow"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'beamWidth', 'narrow'"],
["Barcode","getProperty","method","'beamWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2097","call setproperty with beamWidth  to wide","wide"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'beamWidth', 'wide'"],
["Barcode","getProperty","method","'beamWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2098","call setproperty with connectionIdleTimeout to 10 sec","10000"],
["BarcodeApi","makeSCN3Default","method"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'connectionIdleTimeout', '10000'"],
["Barcode","getProperty","method","'connectionIdleTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2099","call setproperty with connectionIdleTimeout to 20 sec","20000"],
["BarcodeApi","makeSCN3Default","method"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'connectionIdleTimeout', '20000'"],
["Barcode","getProperty","method","'connectionIdleTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2109","call setproperty with barcodeDataFormat as binary",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","getProperty","method","'signature'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2110","call setproperty with barcodeDataFormat as text",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'text'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'signature'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2111","call setproperty with barcodeDataFormat as binary and scan other than signature barcode",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'signature', 'false'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'signature'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2112","call setproperty with barcodeDataFormat as text",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'code128', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'text'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'code128'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2113","call setproperty with barcodeDataFormat as test (invalid value)",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'text'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2114","call setproperty with barcodeDataFormat as empty data",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', ''"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2115","call setproperty with barcodeDataFormat as empty data",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '50000'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2116","call setproperty with dataBufferSize as 20000",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2117","call setproperty with dataBufferSize as 0",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '0'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2118","call setproperty with dataBufferSize as -1",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '-1'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2119","call setproperty with Signature as true",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'signature'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2120","call setproperty with Signature as false",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'signature', 'false'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'signature'|returnGetProperty","sync"],
["Barcode","getProperty","method","'barcodeDataFormat'|returnGetProperty","sync"],
["Barcode","getProperty","method","'dataBufferSize'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2121","call setproperty with signatureImageHeight to 300","300"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageHeight', '300'"],
["Barcode","getProperty","method","'signatureImageHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2122","call setproperty with signatureImageHeight to 50","50"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageHeight', '50'"],
["Barcode","getProperty","method","'signatureImageHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2123","call setproperty with signatureImageHeight to 0","0"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageHeight', '0'"],
["Barcode","getProperty","method","'signatureImageHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2124","call setproperty with signatureImageHeight to -100",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageHeight', '-100'"],
["Barcode","getProperty","method","'signatureImageHeight'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2125","call setproperty with signatureImageWidth to 300",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageWidth', '300'"],
["Barcode","getProperty","method","'signatureImageWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2126","call setproperty with signatureImageWidth to 50",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageWidth', '50'"],
["Barcode","getProperty","method","'signatureImageWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2127","call setproperty with signatureImageWidth to 0",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageWidth', '0'"],
["Barcode","getProperty","method","'signatureImageWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2128","call setproperty with signatureImageWidth to  -100",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageWidth', '-100'"],
["Barcode","getProperty","method","'signatureImageWidth'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2129","call setproperty with signatureImageQuality to 50","50"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageQuality', '50'"],
["Barcode","getProperty","method","'signatureImageQuality'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2130","call setproperty with signatureImageQuality to 95","95"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageQuality', '95'"],
["Barcode","getProperty","method","'signatureImageQuality'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2131","call setproperty with signatureImageQuality to 0","0"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageQuality', '0'"],
["Barcode","getProperty","method","'signatureImageQuality'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2132","call setproperty with signatureImageQuality to -20",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageQuality', '-20'"],
["Barcode","getProperty","method","'signatureImageQuality'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2133","decode signature barcode with all parameter after setting using setproperty",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'signature', 'true'"],
["Barcode","setProperty","method","'barcodeDataFormat', 'binary'"],
["Barcode","setProperty","method","'dataBufferSize', '20000'"],
["Barcode","setProperty","method","'signatureImageHeight', '250'"],
["Barcode","setProperty","method","'signatureImageWidth', '150'"],
["Barcode","setProperty","method","'signatureImageQuality', '50'"],
["Barcode","getProperty","method","'signatureImageQuality'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2134","call setproperty with decodeDuration to 5000","5000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeDuration', '5000'"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2136","call setproperty with decodeDuration to 2000","2000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeDuration', '2000'"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2137","don't call setproperty with decodeDuration","250"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2138","call setproperty with decodeFrequency to 65535","65535"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeFrequency', '65535'"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2139","call setproperty with decodeFrequency to 0","0"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeFrequency', '0'"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2140","don't call setproperty with decodeFrequency","3000"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2141","call setproperty with invalidDecodeFrequency to 65535","65535"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'invalidDecodeFrequency', '65535'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2142","call setproperty with invalidDecodeFrequency to 0","0"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'invalidDecodeFrequency', '0'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2143","call setproperty with invalidDecodeFrequency to 0","0"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'invalidDecodeFrequency', '0'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2143","don't call setproperty with invalidDecodeFrequency","2500"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2144","call setproperty with decodeSound to local wave file path","2500"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeSound', 'file://\\\\Application\\\\Alaram5.wav'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2145","call setproperty with decodeSound to invalid path",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeSound', 'file://\\\\Application\\\\'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2146","call setproperty with invalidDecodeSound to local wave file path",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'invalidDecodeSound', 'file://\\\\Application\\\\Alaram5.wav'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2147","call setproperty with invalidDecodeSound to invalid path",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'invalidDecodeSound', 'file://\\\\Application\\\\'"],
["Barcode","getProperty","method","'invalidDecodeFrequency'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2148","call setproperty with decodeVolume to 1",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeVolume', '1'"],
["Barcode","getProperty","method","'decodeVolume'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2149","call setproperty with decodeVolume to 0",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeDuration', '0'"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2150","don't call setproperty with decodeVolume","5"],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","getProperty","method","'decodeVolume'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2152","call setproperty with decodeVolume to 0",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'decodeDuration', '0'"],
["Barcode","getProperty","method","'decodeDuration'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2159","clearAllProperties() with setting  reader params using setproperties",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'softwareReticle'"],
["Barcode","setProperty","method","'scanTimeout', '7000'"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"],
["Barcode","clearAllProperties","method"],
["Barcode","getProperty","method","'picklistMode'|returnGetProperty","sync"],
["Barcode","getProperty","method","'scanTimeout'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2160","clearAllProperties() with decode params using setproperties",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'true'"],
["Barcode","setProperty","method","'code128', 'false'"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'code128'|returnGetProperty","sync"],
["Barcode","clearAllProperties","method"],
["Barcode","getProperty","method","'alldecoders'|returnGetProperty","sync"],
["Barcode","getProperty","method","'code128'|returnGetProperty","sync"]
]

scannerparams[scannerparams.length] = [["VT282-2161","call getAllProperties() after calling setproperty with reader param",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'picklistMode', 'softwareReticle'"],
["Barcode","setProperty","method","'scanTimeout', '7000'"],
["Barcode","getAllProperties","method"]
]

scannerparams[scannerparams.length] = [["VT282-2162","call getAllProperties() after calling setproperty with  decode param",""],
["Barcode","enable","method","{}, url_for(:action => :scanCallbackCommon)","async"],
["Barcode","setProperty","method","'alldecoders', 'false'"],
["Barcode","setProperty","method","'code93', 'true'"],
["Barcode","getAllProperties","method"]
]