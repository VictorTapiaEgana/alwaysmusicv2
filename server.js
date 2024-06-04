const {seleccionar, listado, insertar, eliminar, actualizar} = require('./functions/funciones.js');
const chalk = require('chalk');

const accion = process.argv.splice(2)

console.clear()
console.log(chalk.bgYellow.bold.green(' OPCIONES: '))
console.log(chalk.bgYellow.bold.red(' listado'))
console.log(chalk.bgYellow.bold.red(' seleccionar  rut'))
console.log(chalk.bgYellow.bold.red(' insertar  nombre rut curso nivel'))
console.log(chalk.bgYellow.bold.red(' actualizar  nombre rut curso nivel'))
console.log(chalk.bgYellow.bold.red(' eliminar  rut'))

switch (accion[0]) {    

    case 'seleccionar':        
        seleccionar(accion[1]);        
        break;

    case 'insertar':  
        insertar(accion[1] ,accion[2], accion[3], accion[4])        
        break;

    case 'actualizar':
        actualizar(accion[1] ,accion[2], accion[3], accion[4])        
        break;

    case 'eliminar':
        eliminar(accion[1])        
        break;

    case 'listado':
        listado();        
        break;

    default:
        console.log(`Ingrese una opcion seguida del parametro`)
        break;
};