if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, navError);
}

var awir;
function success(position) {
    var latq = position.coords.latitude;
    var lngq = position.coords.longitude;

    //console.log('latq: ' + latq);
    //document.write(latq + ' ' + lngq);
    //document.getElementById('test').innerHTML = latq + ' ' + lngq;
    
    awir = new XMLHttpRequest();
    awir.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            //document.getElementById('readystate = ' + this.readyState + 'status = ' + this.status);
            //document.getElementById('ajaxtest').innerHTML = 'readystate = ' + this.readyState + 'status = ' + this.status;
            document.getElementById('weatherinfo').innerHTML = this.response;
            var resp = JSON.parse(this.response);
            var weatherData = resp.weatherInfo;
            var wImg = resp.weatherImage;

            var element = document.getElementById('wim');
            element.src = 'http://localhost:2143' + wImg;
        }
        else{
            //replace element for error messaging for user.
            //document.getElementById('ajaxtest').innerHTML = 'readystate = ' + this.readyState + 'status = ' + this.status;
        }
    }
    awir.open("GET", 'http://localhost:2143/weather?lat=' + latq + '&' + 'lng=' + lngq, true);
    //awir.addEventListener('load', testListener);
    //awir.open('GET', 'http://localhost:2143/weather', true);

    awir.send();
}

function testListener() {
    document.write(this.responseText);
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