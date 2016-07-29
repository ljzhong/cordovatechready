(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        onFirstConnection();
    }

    function onFirstConnection() {
        var targetUrl = 'http://thursdaydemo.azurewebsites.net';

        // if there is internet, navigate away
        if (navigator.connection.type != Connection.NONE) {
            window.location.replace(targetUrl);
            return 0;
        }

        // otherwise, stay on index until first time online
        document.addEventListener("online",
			function () {
			    window.location.replace(targetUrl);
			},
		false);
    }

})();