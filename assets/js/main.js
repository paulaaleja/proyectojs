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