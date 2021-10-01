function sumar (numero1 = 0, numero2 = 0) {
    return numero1 + numero2
};

console.log(sumar(2)); //manda a la consola la suma

//Funciones declaradas
function saludar(nombre){
    return "hola, " + nombre
};

let nombreDeUsuario = 'joni';

console.log(saludar(nombreDeUsuario));


//Funciones expresadas 
/* let hacerSushi = function(cantidad) {
    return "sushi\n".repeat(cantidad)
};

console.log(hacerSushi(10)); */

function saludar2 (nombre= "fulano", apellido = ""){
    return "hola " + nombre + " " + apellido;
}

console.log(saludar2('jonathan', "ibarrola"))

let restar = function(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

