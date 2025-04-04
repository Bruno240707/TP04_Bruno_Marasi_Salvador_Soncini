const PI = Math.PI

const sumar = (numero) => {
    let suma = numero + PI
    console.log(`PI + ${numero} = ${suma}`)
}

const multiplicar = (numero) => {
    let multiplicacion = numero * PI
    console.log(`PI x ${numero} = ${multiplicacion}`)
}

module.exports = {sumar, multiplicar};
