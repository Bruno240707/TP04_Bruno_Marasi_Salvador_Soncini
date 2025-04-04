const fs = require('fs');

const copiar = (archivoEntrada, archivoSalida) => {

    const contenido = fs.readFileSync(archivoEntrada, 'utf8');
        
        fs.writeFileSync(archivoSalida, contenido);

        console.log(`Archivo copiado exitosamente de "${archivoEntrada}" a "${archivoSalida}: ${contenido}"`);
    }

module.exports = copiar;

