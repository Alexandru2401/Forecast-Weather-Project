// Declar functia care imi va afisa vremea pe urmatoarele 5 zile, iar apelul functiei se va face din index.js

function displayWeatherForecast(city) {
    //Ne generam link-ul API-ului catre care vom face request-ul 
    const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);
    // console.log(forecastWeatherEndpoint);
    // Imi selectez elementul cu clasa .weather-forecast, deoarece aici am sa inserez html-ul generat in pasul cu fecth
    const weatherForecastContainer = document.querySelector(".weather-forecast");
    // Inainte de a face call-ul catre server (inainte de fetch), am sa golesc containerul de weatherForecastContainer
    weatherForecastContainer.innerHTML = '';

    fetch(forecastWeatherEndpoint)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // Ne folosim de object destructuring pt a accesa doar proprietatea list din obiectul data
            const { list } = data; 
            // Puteam scrie const listDetails = data.list cea de sus este din ES6 

            // Ne declaram un obiect gol in care o sa tinem predictiile pe zile 
            const daysMap = {};
            // Iteram printre cele 40 de predictii primite de la server, adica prin fiecare elem al array-ului list 
            list.forEach((element) => {
                // Extragem proprietatea dt din fiecare element al array-ului
                const { dt } = element;
                const day = getDayOfTheWeek(dt);
                // Daca avem deja ziua sap in obiectul daysMap, ii adaugam o noua predictie, adica ii adaugam element 
                if (daysMap[day]) {
                    daysMap[day].push(element);
                     // Altfel, daca nu avem ziua sap in obiectul daysMap, o sa adaugam ziua respectiva impreuna cu elementul (predictia)
                } else {
                    daysMap[day] = [element];
                }
            })
            //Iteram prin obiectul daysMap care are deja datele grupate pe zile, folosind instructiunea for...in - adica fiecare cheie din obiect reprezinta o zi a sap 
            for(dayKey in daysMap) {
                // Inserez in HTML ziua din obiectul daysMap 
                weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`; 
                // Imi extrag elementul curent din obiectul daysMap 
                let weatherByDays = daysMap[dayKey];
                weatherByDays.forEach((element) => {
                    // Pt fiecare element sau predictie, pot sa ma apuc sa extrag datele de interes (hours, temperature, real feel)
                    const {dt, main, weather} = element;
                    // Procesez ora
                    const hour = getHours(dt);
                    // Rotunjim temepratura
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round(main.feels_like);
                    // Atentie la descriere, deoarece weather este un array cu un singur element si accesam mereu elementul 0 
                    const description = weather[0].description;
                    const weatherIcon = getWeatherIcon(weather[0].icon);

                    // Inseram in html toate datele de mai sus
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border-rounded mb-3">
                            <div>${hour}</div>
                            <div> <img src="${weatherIcon}"/></div>
                            <div class="fs-3"><strong>${temperature}°C</strong></div>
                            <div>${description}</div>
                            <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                        </div>
                    `; 
                });        
            }

        });
}

