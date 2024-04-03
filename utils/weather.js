// Imi definesc o functie care sa imi returneze iconita de la openWeather pe baza codului primit de la API
function getWeatherIcon(iconCode){
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

// Primim viteza vantului in m/s, iar noi vrem sa o convertim in km/h
function windToKmPerHour(meterPerSec){
    return (meterPerSec * 3600) / 1000;
}