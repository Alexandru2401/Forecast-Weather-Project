// API KEY-urile nu ar fii bn sa le stocam in format text in codul nostru pt ca oricine ar putea sa le vada si sa le foloseasca
// E bn ca ele sa stea pe server, dar in cazul nostru, fiind un API gratuit, o sa le stocam aici.
const  API_KEY = 'f29b6e05c1af05072510e3e64f7f5006';
// Construim link-urile (endpoint-urile) catre care noi o sa facem request-urile  cu JS

function getCurrentWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};

// Declaram a doua fuctie pe care o vom folosi pt a lua URL-ul catre API-ul ce ne returneaza date despre vremea pe 5 zile

function getForecastWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};