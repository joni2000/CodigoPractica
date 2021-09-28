var nombreDeUsuario = 'joniibarrola'; 

console.log(nombreDeUsuario)

var nombreDeUsuario = 'joni';

console.log(nombreDeUsuario);

let nombreDeUsuario2 = 'Hugo';

console.log(nombreDeUsuario2);

var marca = 'Molinos'; //scope global

if(true){
    var marca = 'Arcor' //scope local
}

console.log(marca);

if (true){
    let age = 1986
}

console.log(age); //arroja valor undefined por estar fuera del scope

