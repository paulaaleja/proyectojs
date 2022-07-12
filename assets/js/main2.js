
/*let resultado = (0);

function receta(precio1){
    return precio1 + ((precio1 * 40) /-100)
}

for (let index = 0; index < 5; index++) {
    let resultado = receta(parseFloat(prompt("INGRESAR PRECIO para calcular la cobertura de Obra Social")),(40));
    alert(resultado);
}*/






ingresardatos ()
function ingresardatos () {
    let medicamento = prompt("ingrese medicammento")
   
   


    mostrar (medicamento)


}

function calcvademecum(medicamento) {
    switch (medicamento) {
        case "amoxidal":
            return 1000
        case "actron":
            return 1200
        case "frenaler":
            return 890
        case "tafirol":
             return 720
        default:
            return 0

    }
}

function calcobertura(preciomed) {
    let cobertura = ((preciomed * 40) / 100)
    return cobertura
}



function mostrar (medicamento,preciomed){
    document.write(`El precio con cobertura del 40% del ${medicamento} es de ${cobertura}`)
return mostrar
}


