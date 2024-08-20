/*Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario. */
function tablaMultiplicar(num) {
    numero = parseFloat(num)
    process.stdout.write(`Tabla de multiplicar del ${numero}:\n`);
    for (let i = 1; i <= 10; i++) {
        process.stdout.write(`${numero} x ${i} = ${numero * i}\n`);
    }
}

var numero;
process. stdout.write("Ingrese un numero: ");

process.stdin. on('data', function(data){
    numero = data.toString();
    tablaMultiplicar(numero)
    process.exit();
});

