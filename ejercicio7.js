/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */
var numeros = [];
console.log('Introduce 10 valores enteros:');

process.stdin.on('data', (num) => {
    numeros.push(Number(num.toString().trim()));

    if (numeros.length === 10) {
        detalles(numeros)
        process.exit();
    }
});

function detalles(numeros){
    var cantidadNegativos = 0;
    var cantidadPositivos = 0;
    var cantidadMultiplo15 = 0;
    var sumaPares = 0;

    for (var i = 0; i < numeros.length; i++) {
        var numero = numeros[i];
        if (numero < 0) cantidadNegativos++;
        if (numero > 0) cantidadPositivos++;
        if (numero % 15 === 0) cantidadMultiplo15++;
        if (numero % 2 === 0) sumaPares += numero;
    }

    console.log(`Cantidad de valores negativos: ${cantidadNegativos}`);
    console.log(`Cantidad de valores positivos: ${cantidadPositivos}`);
    console.log(`Cantidad de múltiplos de 15: ${cantidadMultiplo15}`);
    console.log(`Valor acumulado de números pares: ${sumaPares}`);
}
