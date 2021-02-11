 const fs = require ('fs');

// const  crearArchivo = (base=3)=>{

//     return new Promise ((resolve,reject)=>{

        
//         console.log('=======================');
//         console.log('    TABLA  20 : ',base);
//         console.log('=======================');

//         let salida = '';

//         for (let i=1; i<=10; i++)
//         {
//             salida += `${base}X${i}=${base*i}\n`;
//         }
//         console.log(salida);
        
//         fs.writeFileSync(`tabla-${base}.txt`,salida);

//         resolve(`se creó la tabla de ${base}.txt`);

//         })
// 

const colors = require ('colors');

const  crearArchivo = async(base=5, listar = false, hasta=10)=>{
    
    try {
        
    
        let salida = '';
        let consola = '';

        for (let i=1; i<=hasta; i++)
        {
            salida += `${base} X ${i} = ${base*i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if (listar){
            console.log('======================='.green);
            console.log('    TABLA  del: '.green,colors.blue(base));
            console.log('======================='.green);
            
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return`se creó la tabla de ${base}.txt`;
        
    } catch (err) {
        throw err;
    }
}

module.exports= {
    crearArchivo
}