var elemento = document.getElementById("tresbarras");
var barralateral = document.getElementById("navbar");

elemento.addEventListener("mouseover", function() {
    barralateral.classList.add("aumentartamanho")
})
barralateral.addEventListener("mouseover", function() {
    barralateral.classList.remove("diminuirtamanho")
})
barralateral.addEventListener("mouseover", function() {
    barralateral.classList.add("aumentartamanho")
})
barralateral.addEventListener("mouseout", function() {
    barralateral.classList.remove("aumentartamanho")
})
barralateral.addEventListener("mouseout", function() {
    barralateral.classList.add("diminuirtamanho")
})
