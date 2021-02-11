// const base= 5;

// for (let i=1; i<=10;i++){
    
//     console.log(`${base}x ${i}=${base*i}`);

// }

//const yargs = require('yargs');
//const { option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

//console.log('base: yargs', argv.base);

// const [,,arg3 = 'base=5']=process.argv;
// const [,base]=arg3.split('=');

// console.log(base);

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArhivo => console.log(nombreArhivo.rainbow,'Creado'))
    .catch(err => console.log(err));