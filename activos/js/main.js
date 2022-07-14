
const listaNombres = [];
let   cantidad     = 5;
do{
   let entrada = prompt("Ingresar nombre medicamento que necesita");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["Gracias por realizar su compra de medicamentos"]);

alert(nuevaLista.join("\n"));

// consultar la cobertura en el precio de medicamentos
let montoIngresado = parseInt (prompt("Ingrese precio de medicamento a consultar"));
let montoPagar

 const porcentaje = [20, 30, 40, 50];
 for (let i =0; i<4 ; i++) {
 if (montoIngresado <=0) {
    alert ("Ingrese un monto valido por favor!")
    break
 }


 montoPagar = montoIngresado * porcentaje [i] / 100
 alert ("Con un descuento del " + porcentaje[i] + "%, Pagas tu medicamento $" + montoPagar);
 }
