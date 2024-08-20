/*Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo. */
function obtenerMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
var numero1=0, numero2=9;
var mayor = obtenerMayor(numero1, numero2);
console.log('El número mayor es: '+mayor);
