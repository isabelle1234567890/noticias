const botaoabrir = document.querySelector(".header-mobile > button")
const botaofechar = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")


botaoabrir.addEventListener(`click`, abrirmenu)
botaofechar.addEventListener("click,fecharmenu")

function abrirmenu() {
body.classList.add("escurecer")
nav.classList.add("abrir")

}

function fecharmenu() {
    body.classList.remove("escurecer")
    body.classList.remove("abrir")
}