let estudiantes = [
    {
        nombre: 'Bastian',
        nota: 100,
        observacion: 'Excelente examen'
    },{
        nombre: 'Luisana',
        nota: 85,
        observacion: 'Prestar mas atencion al for'
    },{
        nombre: 'Anna',
        nota: 70,
        observacion: 'Estudiar mas sobre objetos.'
    }
]

let nombre = document.querySelector('#nombre')
let boton = document.querySelector('button')
let observacion = document.querySelector('#observacion')
let nota = document.querySelector('#nota')

boton.onclick = function(){
    for (let index = 0; index < estudiantes.length; index++) {
        if(estudiantes[index].nombre == nombre.value){
            
        }
        
    }

}