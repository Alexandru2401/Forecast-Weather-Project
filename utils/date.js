// Aici o sa avem logica pt a ne extrage intr-un mod citibil data primita de la API
function getDayOfTheWeek(dateInUtc){
    // Pentru ca data de la API este in UTC format, trb sa o transform folosind New Date
    const date = new Date(dateInUtc * 1000);
    const dayIndex = date.getDay();
    // console.log(dayIndex);
    let day;
    switch (dayIndex) {
        case 0: 
            day = "Duminica";
            break;
        case 1:
            day = "Luni";
            break;
        case 2: 
            day = "Marti";
            break;
        case 3:
            day = "Miercuri";
            break;
        case 4: 
            day = "Joi";
            break;
        case 5:
            day = "Vineri";
            break;    
        case 6: 
            day = "Sambata";
            break;
        default: 
            // Aruncam o eroare daca indexul nu este valid (teoretic nu ar trb sa se ajunga la eroare)
            throw new Error("Invalid day index"); 
    }
    return day;
};

function getHours(dateInUtc) {
    const date = new Date(dateInUtc * 1000);
    // Etragem ora folosind metoda getHours()
    // Daca ora este mai mica decat 10, o sa adaugam 0 in fata
    let hours = date.getHours();
    if (hours<10) {
        hours = `0${hours}`;
    } 
    // Extragem minutele folosind o metoda de pe obiectul date 
    let minutes = date.getMinutes();
    if (minutes<10) {
        minutes = `0${minutes}`;
    }
    //Returnam ora sub formatul dorit
    return `${hours}:${minutes}`; 
}

