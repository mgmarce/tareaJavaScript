/*Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
• Examen =20% • tareas = 40% • asistencia = 10% • investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    var notaFinal = ((examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30)).toFixed(2);
    console.log('***********************************************')
    console.log('\tNombre: '+nombre);
    console.log('\tCarnet: '+carnet);
    console.log('\tNota final: '+notaFinal);
    console.log('***********************************************')
}

var nombre = 'Marcela Menjívar', carnet = '1223';
var examen = 8.5, tareas = 9.0, asistencia = 9.5, investigacion = 8.0;

calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion);
