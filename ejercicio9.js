/*Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida */

function tempCelsiusFahrenheit(celsius) {
    var tempFahrenheit = (celsius * 9/5) + 32;
    return tempFahrenheit;
}

function estadoTemperatura(fahrenheit){
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
};

//Valores
var tempCelsius = 32; 
var tempFahrenheit = tempCelsiusFahrenheit(tempCelsius);

//Impresion
console.log('La temperatura en Fahrenheit es: '+(tempFahrenheit.toFixed(1))+'ºF');
console.log(estadoTemperatura(tempFahrenheit));
