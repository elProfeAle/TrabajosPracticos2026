/*
Ejercicio 3: Mensaje de bienvenida v2
Extender el ejercicio anterior usando otra variable nombreUsuario:
Si el nombre es "Nahuel" o "Marcos", el párrafo debe mostrar: "Bienvenido " + nombreUsuario + " ¿cómo estás?".
Si el nombre es otro, debe mostrar: "Bienvenido " + nombreUsuario.
Tip: para comparar contra dos valores posibles, se puede usar el operador || ("o") dentro del if.
*/
//Guardamos los elementos de HTML
let parrafoEj3 = document.querySelector('#parrafoEj3')
let inputNombre = document.querySelector('#inputEj3')
let botonEj3 = document.querySelector('#botonEj3')
let nombreUsuario

botonEj3.onclick = function () {
    //Para mayor comodidad, guardamos el valor del input en una variable 
    nombreUsuario = inputNombre.value
    if ((nombreUsuario == 'Nahuel') || (nombreUsuario == 'Marcos')) {
        parrafoEj3.textContent = 'Bienvenido ' + nombreUsuario + ' como estás?'
    } else {
        parrafoEj3.textContent = 'Bienvenido ' + nombreUsuario
    }
}

/*
Ejercicio 4: Número positivo, negativo o cero
Declarar una variable numero con un valor numérico fijo.
Si es mayor que 0 → el párrafo muestra "El número es positivo".
Si es menor que 0 → el párrafo muestra "El número es negativo".
Si es igual a 0 → el párrafo muestra "El número es cero".

*/

let parrafoEj4 = document.querySelector('#parrafoEj4')
let numero = document.querySelector('#numero')
let botonEj4 = document.querySelector('#botonEj4')

botonEj4.onclick = function () {
    if (numero.value > 0) {
        parrafoEj4.textContent = 'El número es positivo'
    } else if (numero.value < 0) {
        parrafoEj4.textContent = 'El número es negativo '
    } else {
        parrafoEj4.textContent = 'El número es cero '
    }
}
