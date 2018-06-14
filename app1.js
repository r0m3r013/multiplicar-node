//----- Requireds
const fs = require('fs');
//const fs = require('express');
//const fs = require('./archivo');

let base = 88;
let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i } \n`;
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo a sido creado!');
});

crearArchivo(base)
    .then(archivo => console.log);