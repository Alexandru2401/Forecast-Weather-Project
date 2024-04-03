const bucharestButton = document.querySelector(".dropdown-menu li .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu li .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu li .oradea");
const aradButton = document.querySelector(".dropdown-menu li .arad");
const sibiuButton = document.querySelector(".dropdown-menu li .sibiu");


// Declaram o functie care sa ne schimbe orasul curent
function updapeCurrentCity(city) {
    // Mai intai trb sa selectez elementul care imi tine orasul curent
    const currentCityElem = document.querySelector(".current-city");
    currentCityElem.innerHTML = city;
}

// Declaram o functie care ne va schimba orasul si ne va face updape la vreme
function updapeWeather(city) {
    // Actualizam orasul selectat din dropqown in localStorage
    localStorage.setItem("city", city);
    
    //Reafisam vremea curenta in functie de orasul selectat
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    // Actualizam orasul afisat pe ecran - o sa ne ajutam de o alta functie
    // Apelez functia updapeCurrentCity
    updapeCurrentCity(city);

}

// Adaugam event listner pe fiecare event in parte, adica pe fiecare buton din dropdown 
bucharestButton.addEventListener("click", function(){
    //La click pe butonul "Bucuresti", ar trb sa se schimbe numele orasului si sa se faca updape la vreme 
    updapeWeather("București");
});

oradeaButton.addEventListener("click", function(){
    //La click pe butonul "Bucuresti", ar trb sa se schimbe numele orasului si sa se faca updape la vreme 
    updapeWeather("Oradea")
});

timisoaraButton.addEventListener("click", function(){
    //La click pe butonul "Bucuresti", ar trb sa se schimbe numele orasului si sa se faca updape la vreme 
    updapeWeather("Timișoara");
});

aradButton.addEventListener("click", function(){
    updapeWeather("Arad")
});

sibiuButton.addEventListener("click", function(){
    updapeWeather("Sibiu")
});