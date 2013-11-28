describe("DPX", function () {

    it("Should set debugMode property to true", function () {
        Rho.DPX.debugMode = true;
        expect(Rho.DPX.debugMode).toEqual(true);
    });

    it("Should set debugMode property to false", function () {
        Rho.DPX.debugMode = false;
        expect(Rho.DPX.debugMode).toEqual(false);
    });

    it("Should set fedbackAudio property to true", function () {
        Rho.DPX.fedbackAudio = true;
        expect(Rho.DPX.fedbackAudio).toEqual(true);
    });

    it("Should set fedbackAudio property to false", function () {
        Rho.DPX.fedbackAudio = false;
        expect(Rho.DPX.fedbackAudio).toEqual(false);
    });

    it("Should set feedbackHaptic property to true", function () {
        Rho.DPX.feedbackHaptic = true;
        expect(Rho.DPX.feedbackHaptic).toEqual(true);
    });

    it("Should set feedbackHaptic property to false", function () {
        Rho.DPX.feedbackHaptic = false;
        expect(Rho.DPX.feedbackHaptic).toEqual(false);
    });

    it("Should set feedbackLed property to true", function () {
        Rho.DPX.feedbackLed = true;
        expect(Rho.DPX.feedbackLed).toEqual(true);
    });

    it("Should set feedbackLed property to false", function () {
        Rho.DPX.feedbackLed = false;
        expect(Rho.DPX.feedbackLed).toEqual(false);
    });

    it("Should set fileInteractiveMode property to true", function () {
        Rho.DPX.fileInteractiveMode = true;
        expect(Rho.DPX.fileInteractiveMode).toEqual(true);
    });

    it("Should set fileInteractiveMode property to false", function () {
        Rho.DPX.fileInteractiveMode = false;
        expect(Rho.DPX.fileInteractiveMode).toEqual(false);
    });

    it("Should set uiResultConfirmation property to true", function () {
        Rho.DPX.uiResultConfirmation = true;
        expect(Rho.DPX.uiResultConfirmation).toEqual(true);
    });

    it("Should set uiResultConfirmation property to false", function () {
        Rho.DPX.uiResultConfirmation = false;
        expect(Rho.DPX.uiResultConfirmation).toEqual(false);
    });

    it("Should set userMode property to true", function () {
        Rho.DPX.userMode = true;
        expect(Rho.DPX.userMode).toEqual(true);
    });

    it("Should set userMode property to false", function () {
        Rho.DPX.userMode = false;
        expect(Rho.DPX.userMode).toEqual(false);
    });

    it("Should set zoomAmount property to true", function () {
        Rho.DPX.zoomAmount = true;
        expect(Rho.DPX.zoomAmount).toEqual(true);
    });

    it("Should set zoomAmount property to false", function () {
        Rho.DPX.zoomAmount = false;
        expect(Rho.DPX.zoomAmount).toEqual(false);
    });

    /*describe("testing boolean properties with valid input", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("able to configure the audioFeedback parameter", function() {
     runs(function(){
     //  todo : Set the audioFeedback parameter to true and false, the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     it("able to configure the hapticFeedback parameter", function() {
     runs(function(){
     //  todo : Set the hapticFeedback parameter to true and false, the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     it("able to configure the ledFeedback parameter", function() {
     runs(function(){
     //  todo : Set the ledFeedback parameter to true and false, the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     it("able to configure the flash parameter", function() {
     runs(function(){
     //  todo : Set the flash parameter to true and false, the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     });


     describe("testing string properties with valid input", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("able to configure the template parameter", function() {
     runs(function(){
     //  todo : Set the template parameter to a valid value (pointing to an xml), the retrieved parameter
     //  should match the value just set.  Repeat this with very long and very short valid values
     expect(true);
     });
     });

     it("able to configure the inputSourceFileUri parameter", function() {
     runs(function(){
     //  todo : Set the inputSourceFileUri parameter to a valid value (pointing to an image file), the retrieved parameter
     //  should match the value just set.  Repeat this with very long and very short valid values
     expect(true);
     });
     });

     it("able to configure the inputSource parameter", function() {
     runs(function(){
     //  todo : Set the inputSource parameter to a valid value (camera, file), the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     it("able to configure the returnedPictureFormat parameter", function() {
     runs(function(){
     //  todo : Set the returnedPictureFormat parameter to a valid value (png, jpg, bmp), the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     });

     describe("testing string properties with invalid input", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("unable to configure the template parameter with invalid input", function() {
     runs(function(){
     //  todo : Set the template parameter to an invalid value (not pointing to an xml or a malformed path), the retrieved parameter
     //  should not match the value just set.
     expect(true);
     });
     });

     it("unable to configure the inputSourceFileUri parameter with invalid input", function() {
     runs(function(){
     //  todo : Set the inputSourceFileUri parameter to an invalid value (not pointing to an image file), the retrieved parameter
     //  should not match the value just set.
     expect(true);
     });
     });

     it("unable to configure the inputSource parameter with invalid input", function() {
     runs(function(){
     //  todo : Set the inputSource parameter to a valid value (NOT camera or file), the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     it("unable to configure the returnedPictureFormat parameter with invalid input", function() {
     runs(function(){
     //  todo : Set the returnedPictureFormat parameter to a valid value (NOT one of: png, jpg, bmp), the retrieved parameter
     //  should match the value just set.
     expect(true);
     });
     });

     });

     describe("testing integer properties with valid input", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("able to configure the identificationTimeout parameter", function() {
     runs(function(){
     //  todo : Set the identificationTimeout parameter to a valid value (positive integer including a huge value and 0), the retrieved parameter
     //  should match the value just set.  Repeat this with a number of valid values
     expect(true);
     });
     });

     it("able to configure the processingTimeout parameter", function() {
     runs(function(){
     //  todo : Set the processingTimeout parameter to a valid value (positive integer including a huge value and 0), the retrieved parameter
     //  should match the value just set.  Repeat this with a number of valid values
     expect(true);
     });
     });

     });

     describe("testing integer properties with invalid input", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("unable to configure the identificationTimeout parameter to an invalid value", function() {
     runs(function(){
     //  todo : Set the identificationTimeout parameter to an invalid value (negative integer), the retrieved parameter
     //  should match the value just set.  Repeat this with a number of valid values
     expect(true);
     });
     });

     it("unable to configure the processingTimeout parameter to an invalid value", function() {
     runs(function(){
     //  todo : Set the processingTimeout parameter to an invalid value (negative integer), the retrieved parameter
     //  should match the value just set.  Repeat this with a number of valid values
     expect(true);
     });
     });

     });


     describe("testing read only properties", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("unable to configure the version parameter", function() {
     runs(function(){
     //  todo : Set the version parameter to any String.  The version should not be changed and should return
     //  a valid version string (not blank)
     expect(true);
     });
     });

     });


     describe("capturing a document", function () {

     beforeEach(function () {});
     afterEach(function () {});

     //  todo : For each provided sample image and associated sample template capture and process that document.
     //         The returned regions will obviously be different for each document but should match the values
     //         (OCR / barcodes / OMR etc.) specified in the templates.  All returned values in the callback
     //         should be checked to ensure they are correct.  The callback will be called asynchronously so this
     //         test should take account of that.
     //         Whilst testing, ensure all values of 'returnedPictureFormat' are tested and verified.

     it("able to capture and process a document from a provided image", function() {
     runs(function(){
     //  todo : Each sample image / template should be tested within an it(), i.e. put this in a loop.
     expect(true);
     });
     });

     });

     describe("capturing a document is fault tolerant", function () {

     beforeEach(function () {});
     afterEach(function () {});

     it("will return a sensible error if an invalid template is provided", function() {
     runs(function(){
     //  todo : try and capture one of the sample images providing an invalid template (not an XML or corrupt xml).
     //         A callback with an error should be returned.  That error should make sense to the user.
     expect(true);
     });
     });

     it("will return a sensible error if an invalid image is provided", function() {
     runs(function(){
     //  todo : try and capture one of the sample images providing an invalid image (e.g. image not found).
     //         A callback with an error should be returned.  That error should make sense to the user.
     expect(true);
     });
     });

     it("will re-use the previously specified fileURI if not specified for a file capture", function() {
     runs(function(){
     //  todo : try and perform a capture from a file but do not specify the fileURI in the captureDocument propertyMap.
     //         Specify the fileURI previously through setProperty.  The document should be successfully captured.
     expect(true);
     });
     });

     it("will timeout if a non-matching template provided", function() {
     runs(function(){
     //  todo : try and capture one of the sample images providing a template not associated with that image.
     //         A callback with a timeout should be returned.
     expect(true);
     });
     });

     it("will timeout if the document cannot be processed quickly enough", function() {
     runs(function(){
     //  todo : try and capture one of the sample images providing the correct template but set the processing time
     //         too low to allow the processing to complete.
     //         A callback with a timeout should be returned.
     expect(true);
     });
     });

     it("will timeout if the user does not interact with the camera", function() {
     runs(function(){
     //  todo : try and capture with the camera.  Because this is an unmanned automated test there will be no interaction
     //         with the camera.  A callback with a timeout should be returned.
     expect(true);
     });
     });

     });
     */
});
