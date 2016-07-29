// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        document.getElementById('my_button').addEventListener('click', takePicture.bind(this), false);
    };

    function takePicture() {
        if (!navigator.camera) {
            alert('Camera API not supported');
            return;
        }

        var options = {
            quality: 20,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,
            encodingType: 0
        };

        navigator.camera.getPicture(function (data_url) {
            var image = document.getElementById('smile');

            var srcAttr = document.createAttribute('src');
            srcAttr.value = 'data:image/jpeg;base64,' + data_url;

            image.attributes.setNamedItem(srcAttr);
        }, function () {
            alert('Error taking picture');
        }, options);

        return false;
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();