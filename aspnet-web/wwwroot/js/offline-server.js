(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", onOnline, false);
    }

    function onOffline() {
        // add a full page warning
        var offline = document.getElementById('offline');

        // Trigger the cover if it doesn't already exist
        if (!offline) {

            // hide all child elements under the body
            var children = document.body.children;
            for (var i = 0; i < children.length; i++) {
                children[i].style.display = "none";
            }

            var offline = document.createElement('div');
            offline.id = "offline";
            offline.innerHTML = '<p>Temporarily offline :(</p>';

            offline.style.position = "fixed";
            offline.style.top = "0";
            offline.style.left = "0";
            offline.style.right = "0";
            offline.style.bottom = "0";
            offline.style.padding = "25px";
            offline.style.margin = "0";
            offline.style.width = "100%";
            offline.style.height = "100%";

            document.body.appendChild(offline);
        }
    }

    function onOnline() {
        // show all elements under the body
        var children = document.body.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "initial";
        }

        // remove offline div
        var offline = document.getElementById('offline');
        document.body.removeChild(offline);
    }

})();