
var barralateral = document.getElementById("navbar");
var botoes = document.getElementById("animacaoaumentadiminui")
var botaonavegar = document.getElementById("botaonavegar")

barralateral.addEventListener("mouseover", function() {
    barralateral.classList.remove("diminuirtamanho")
    barralateral.classList.add("aumentartamanho")
    botaonavegar.innerHTML = ("<img src='../imagens/icons8-up-arrow-50.png'><h2>Oi bom dia</h2>")
})
barralateral.addEventListener("mouseout", function() {
    barralateral.classList.add("diminuirtamanho")
    barralateral.classList.remove("aumentartamanho")
    botaonavegar.innerHTML = ("<img src='../imagens/icons8-up-arrow-50.png'>")
})
botoes.addEventListener("mouseover", function() {
    botaonavegar.classList.add("aumentarbotao")
    botaonavegar.classList.remove("diminuirbotao")
})
botoes.addEventListener("mouseout", function() {
    botaonavegar.classList.add("diminuirbotao")
    botaonavegar.classList.remove("aumentarbotao")
})
