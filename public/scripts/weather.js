if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, navError);
}

function success(position) {
    var latq = position.coords.latitude;
    var lngq = position.coords.longitude;
    
    var awir = new XMLHttpRequest();
    
    awir.open("GET", "http://localhost:2143/weather?lat=latq&lng=lngq", false);

    awir.onreadystatechange = function() {
        if(awir.readyState == 4 && awir.status == 200) {
            document.write(awir.responseText);
        }
    };
    awir.send();
}

function navError(error) {
    var msg = "";

    switch(error.code) {
        case error.PERMISSION_DENIED:
            msg = "Location permission denied";
            break;
        
        case error.POSITION_UNAVAILABLE:
            msg = "Location unavailable";
            break;

        case error.PERMISSION_DENIED_TIMEOUT:
        msg = "Permission timeout, be a bit faster there sport"; 
            break;
    }
}

/*UploadCoordinate(function(coord){
    document.write(coord.latitude + ' ' + coord.longitude);
});

function GetGeoCoords(callback) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var returnVal = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            
            callback(returnVal);
        }
    );
}
*/
