let frutas = ["Banana", "Frutilla", "Pera"];

console.log("Array original-> " + frutas);

// Metodo Push
frutas.push("Manzana"); //recibe como parametro el elemento que quieras agregar
console.log("Push-> " + frutas);

//POP: Elimina el ultimo elemento del array
frutas.pop();
console.log("POP-> " + frutas)

//SHIFT: Elimina el primer elemento de un array
frutas.shift();
console.log("shift-> " + frutas);

//UNSHIFT: agrega uno o mas elementos al comienzo del array
frutas.unshift("kiwi","Uva");
console.log("UNSHIFT-> " + frutas);

//JOIN : agrega cosas entre los elementos
console.log(frutas);
let separadosPorComa = frutas.join();
console.log(separadosPorComa);

let separadosPorGuion = frutas.join(" - ");
console.log(separadosPorGuion);

//INDEXOF: Busca dentro del array el elemento que le pasamos como parametro y nos devuelve el indice
//Si no lo encuentra develve -1
console.log(frutas.indexOf("Uva")); //1
console.log(frutas.indexOf("Manzana")); //-1
console.log(frutas.indexOf("Frutilla")); //3
console.log(frutas.indexOf("frutilla")); //-1

let fruta = "Pera";

if(frutas.indexOf(fruta) != -1){
    console.log("La fruta que buscabas esta en el indice: " + frutas.indexOf(fruta));
} else {
    console.log("No encontre la fruta que buscabas");
}

//LastIndexOF: trae el indice del ultimo elemento con ese nombre 
frutas.push("Frutilla")
console.log(frutas)

console.log(frutas.lastIndexOf("Pera"));

console.log(frutas.lastIndexOf("Frutilla"))

//Includes: me retorna un boleano en caso de encontrar lo que le pasamos por parametro
console.log(frutas.includes("Frutilla"));
console.log(frutas.includes("Anana"))
