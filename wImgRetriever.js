module.exports.GetWeatherIconFromID = function(wIDParam) {
    var weatherIcon = null;
    //var wbody = JSON.parse(wIDParam);
    //var weatherIDCode = wbody.weather.id;
    var weatherIDCode = wIDParam.weather[0].id;
    
    switch(weatherIDCode) {
        
        /*thunderstorm*/
        case 200: //w light rain
        case 201: //with rain
        case 202: //heavy rain
        case 210: //light thunderstorm
        case 211: //thunderstorm
        case 212: //heavy thunderstorm
        case 221: //ragged thunderstorm
        case 230: //thunderstorm w light drizzle
        case 232: //thunderstorm w heavy drizzle
            weatherIcon = '/public/weathericons/thunderstorms.png'
        break;

        /*drizzle*/
        case 300: //light drizzle
        case 301: //drizzle
        case 302: //heavy intensity drizzle
        case 310: // light intensity drizzle rain
        case 311: //drizzle rain
        case 312: //heavy drizzle rain
        case 313: //shower rain and drizzle
        case 314: //heavy shower rain and drizzle
        case 321: //shower drizzle
        weatherIcon = '/public/weathericons/lightrain.png';
        break;

        /*rain*/
        case 500: //light rain
        case 501: //moderate rain
        case 502: //heavy intensity rain
        case 503: //very heavy rain
        case 504: //extreme rain
        case 511: //freezing rain
        case 520: //light intensity shower rain
        case 521: //shower rain
        case 522: //heavy intensity shower rain
        case 531: //ragged shower rain
        weatherIcon = '/public/weathericons/rain.png';
        break;

        /*snow*/
        case 600: //light snow
        case 601: //snow
        case 602: //heavy snow
        case 611: //sleet
        case 612: //shower sleet
        case 615: //light rain and snow
        case 616: //rain and snow
        case 620: //lght shower snow
        case 621: //shower snow
        case 622: //heavy shower snow
        weatherIcon = '/public/weathericons/snowstorm.png';
        break;

        /*atmosphere*/
        case 701: //mist
        case 711: //smoke
        case 721: //haze
        case 731: //sand, dust whirls
        case 741: //fog
        weatherIcon = '/public/weathericons/fog.svg';
        case 751: //sand
        case 761: //dust
        case 762: //volanic ash
        case 771: //squalls
        case 781: //tornado
        break;

        /*clear*/
        case 800:
        weatherIcon = '/public/weathericons/clearSky.png';
        break;

        /*clouds*/ 
        case 801: //few clouds
        weatherIcon = '/public/weathericons/fewClouds.png'; 
        case 802: //scattered clouds
        weatherIcon = '/public/weathericons/scatteredClouds.png';
        case 803: //broken clouds
        weatherIcon = '/public/weathericons/fewClouds.png';
        case 804: //overcast clouds
        weatherIcon = '/public/weathericons/overcast.png';
        break;
        
        default:
        break;
    }

    return weatherIcon;
}