const argv = require('yargs')
        .option('b',{
            alias  : 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la tabla de multiplicar' 
        })
        .option('h',{
            alias  : 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es es el numero donde quiere la tabla'
        })
        .option('l',{
            alias  : 'listar',
            type: 'boolean',
            default: false,
            describe: 'Es la tabla en consola' 
        })
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw 'La base iene que ser un numero'
             }
            return true;
        })
        .argv;

module.exports = argv;