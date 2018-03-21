if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, navError);
}

function success(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    //document.write(lat + ' ' + lng);
    document.getElementById('test').innerHTML = lat + ' ' + lng;
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