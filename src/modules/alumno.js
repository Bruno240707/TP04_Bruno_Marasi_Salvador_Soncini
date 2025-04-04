const alumnos = [{
    nombre: "Salvador Soncini",
    dni: "48387471"
},
{
    nombre: "Bruno Marasi",
    dni: "48113202"
}]

const mostrarAlumnos = () =>{
    alumnos.forEach(a => {
        console.log(`Nombre Alumno: ${a.nombre}`)
        console.log(`DNI Alumno: ${a.dni}`)
        console.log("")
    })
}

module.exports = mostrarAlumnos;
