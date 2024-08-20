/*Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche. Nota: Las edades de cada estudiante se deberán ingresar por la web. 
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor. */

var edadesManana = [50, 57, 80, 21, 22];
var edadesTarde = [23, 21, 21, 20, 35, 25];
var edadesNoche = [17, 30, 20, 28, 22, 16, 34, 25, 48, 27, 28];

function calcularPromedio(edades) {
    var suma = 0;
    for (var i = 0; i < edades.length; i++) {
        suma += edades[i];
    }
    return suma / edades.length;
}

var promedioManana = calcularPromedio(edadesManana);
var promedioTarde = calcularPromedio(edadesTarde);
var promedioNoche = calcularPromedio(edadesNoche);

var mayorPromedio = promedioManana;
var turnoMayorPromedio = 'mañana';

if (promedioTarde > mayorPromedio) {
    mayorPromedio = promedioTarde;
    turnoMayorPromedio = 'tarde';
}
if (promedioNoche > mayorPromedio) {
    mayorPromedio = promedioNoche;
    turnoMayorPromedio = 'noche';
}


console.log('Promedio de edades del turno mañana: '+promedioManana.toFixed(1));
console.log('Promedio de edades del turno tarde: '+promedioTarde.toFixed(1));
console.log('Promedio de edades del turno noche: '+promedioNoche.toFixed(1));
console.log('El turno con el mayor promedio de edades es el turno: '+turnoMayorPromedio);
