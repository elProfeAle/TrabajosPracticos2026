let parrafo = document.querySelector('p')
let botonTexto = document.querySelector('#botonTexto')
let botonFondo = document.querySelector('#botonFondo')
let botonColor = document.querySelector('#botonColor')
let botonLetra = document.querySelector('#botonLetra')

botonTexto.onclick = function(){
    parrafo.textContent = 'Texto nuevo generado por el botón'
}
botonFondo.onclick = function(){
    parrafo.style.backgroundColor = '#034a36ff'
}
botonColor.onclick = function(){
    parrafo.style.color = '#efceceff'
}
botonLetra.onclick = function(){
    parrafo.style.fontFamily = 'Verdana'
}