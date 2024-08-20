/**CATEGORIA AUMENTO 
       A        15%
       B        30%
       C        10%
       D        20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial. */
function calcularAumento(nombre, salario, categoria) {
    var porcentaje;
    switch(categoria) {
        case 'A':
            porcentaje = 0.15;
            break;
        case 'B':
            porcentaje = 0.30;
            break;
        case 'C':
            porcentaje = 0.10;
            break;
        case 'D':
            porcentaje = 0.20;
            break;
        default:
            console.log("Categoría no válida.");
            return;
    }
    var aumento = salario * porcentaje;
    var nuevoSalario = salario + aumento;
    console.log('***********************************************')
    console.log('Nombre: '+nombre);
    console.log('Salario: $'+(salario.toFixed(2)));
    console.log('Categoría: '+categoria);
    console.log('Porcentaje a aplicar: '+((porcentaje*100).toFixed(2))+'%')
    console.log('Aumento: '+(aumento.toFixed(2)))
    console.log('Nuevo Salario: $'+(nuevoSalario.toFixed(2)));
    console.log('***********************************************')
}
var nombre = 'Marcela Menjívar', salario = 1000, categoria = 'C';
calcularAumento(nombre, salario, categoria);