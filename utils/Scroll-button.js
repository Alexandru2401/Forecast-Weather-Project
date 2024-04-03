// Declar variabilele
const scrollToTop = document.querySelector(".back-to-top");
// Creez functia de scroll 
scrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
    });
});

//Momentul in care va aparea butonul de scroll
document.addEventListener("scroll", function(){
    const windowHeight = window.innerHeight/2;
    if (window.scrollY > windowHeight){
        scrollToTop.style.visibility = "visible";
    } else {
        scrollToTop.style.visibility = "hidden";
    }
});