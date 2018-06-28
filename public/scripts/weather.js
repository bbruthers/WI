
//query user for browser's geolocation (will need permissions)
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, navError);
}

var awir;
//permission granted, now contact to get weather information
function success(position) {
    var latq = position.coords.latitude;
    var lngq = position.coords.longitude;
    
    awir = new XMLHttpRequest();
    awir.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
          
            //connection successful and response sent
            document.getElementById('weatherinfo').innerHTML = this.response;
            var resp = JSON.parse(this.response);
            var weatherData = resp.weatherInfo;
            var wImg = resp.weatherImage;

            var element = document.getElementById('wim');
            element.src = 'http://localhost:2143' + wImg;
        }
        else{
            //error graphic will display here
        }
    }
    //use localhost until hosted server is configured & running
    awir.open("GET", 'http://localhost:2143/weather?lat=' + latq + '&' + 'lng=' + lngq, true);
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
        msg = "Permission request timeout";
            break;
    }
}