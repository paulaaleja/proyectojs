let nombre = prompt ("Ingrese su nombre");
let gracia = nombre;
let pedidoConcatenar="";


while (pedidoConcatenar != "esc"){
pedidoConcatenar = prompt ("Ingrese los productos que necesite en este espacio");
resultado = gracia + " solicitaste los siguientes productos: " + pedidoConcatenar;
alert ("Hola, " + resultado);
}


