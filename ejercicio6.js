/*Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.*/

function calcularDescuento(origen, destino) {
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();
    if (origen === 'palma') {
        switch (destino) {
            case 'la costa del sol':
                return 0.05;
            case 'panchimalco':
                return 0.10;
            case 'puerto el triunfo':
                return 0.15;
            default:
                return 0;
        }
    } else {
        return 0;
    }
}

var origen = 'Palma';
var destino = 'Puerto el Triunfo';
var precio = 1000;

var descuento = calcularDescuento(origen, destino);
var precioFinal = precio - (precio*descuento);

console.log('El precio original es: $'+precio);
console.log('El descuento aplicado es: $'+(descuento*100)+'%');
console.log('El precio final es: $'+precioFinal);
