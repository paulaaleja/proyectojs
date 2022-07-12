const listaNombres = [];
let   cantidad     = 5;
do{
   let entrada = prompt("Ingresar nombre medicamento que necesita");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["Gracias por realizar su compra de medicamentos"]);

alert(nuevaLista.join("\n"));

