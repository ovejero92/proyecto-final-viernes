let prod = ["mouse","teclado","pc","mouse pad"]
let nombres = ["gus","eze","nahue","mile"]

// prod[1] = "celu"

// for( let i = 0 ; i < prod.length ; i++ ){
//     console.log(prod[i])
// }

//prod.splice(1,1)


function eliminarElemento(array,elemento){
    const index = array.indexOf(elemento)
    if(index !== -1){
        array.splice(index,1);
        return true;
    }
    return false;
}

let usPed = prompt('Ingrese el elemento que quiere eliminar')

const eliminado = eliminarElemento(prod,usPed)
const eliminado2 = eliminarElemento(nombres,"gus")

if(eliminado){
    alert(`El elemento ${usPed} fue eliminado.`)
} else {
    alert("EL elemento"+usPed+"no existe")
    alert(`El elemento ${usPed} no existe.`)
}

console.log(prod)
console.log(nombres)