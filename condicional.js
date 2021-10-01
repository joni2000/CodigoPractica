/* condicionales */

let color = "Rojo";

/* if(color != "Rojo"){
    console.log("Avance");   
}else {
    console.log(Stop)
} */

if(color.toLowerCase() === "Rojo"){
    console.log("Stop")
}else if(color.toLowerCase() === "Amarillo"){
    console.log("Avance con precaucion")
}else if(color.toLowerCase() === "Verde"){
    console.log("Avance")
}else{
    console.log("No es color de semaforo")
}



