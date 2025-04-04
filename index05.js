const parsearUrl = require('./src/modules/parsearUrlEj')

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto)