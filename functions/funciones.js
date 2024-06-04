const chalk = require('chalk');
var Pool = require('pg-pool');

const config = {
    host: "localhost",
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max:process.env.POOL_MAX,
    idleTimeoutMillis: process.env.POOL_IDLE,
    connectionTimeoutMillis: process.env.POOL_TIMEOUT,
};

const pool = new Pool(config);
let client;

async  function listado (){    

    try {

        client = await pool.connect()
        const text = "SELECT nombre,rut,curso,nivel FROM estudiantes";    
        const response = await client.query(text);
        console.log(chalk.bgGreen.blue(`LISTADO DE ALUMNOS`))
        console.table(response.rows);
        
    } catch (error) {

        console.log(chalk.bgRed(`X Error al conectat a la base de datos: ${error}`) )   

    } finally {

        client.release()

    }    
}

async  function seleccionar (rut){

    try {

        client = await pool.connect()
        const text = "SELECT nombre,rut,curso,nivel FROM estudiantes WHERE rut = $1";
        const values = [rut];
        const response = await client.query(text, values);
        console.log(chalk.bgGreen.blue(`USUARIO SELECCIONADO`))    
        console.table(response.rows);
        
    } catch (error) {

        console.log(chalk.bgRed(`X Error al conectat a la base de datos: ${error}`) )    

    } finally {

        client.release()
    }    
   
}

async  function insertar (rut, nombre, curso, nivel){

    try {

        client = await pool.connect()
        const text = "INSERT INTO estudiantes VALUES ( $1 , $2 , $3 , $4 )";
        const values = [rut, nombre, curso, nivel]    
        const response = await client.query(text,values);
        console.table({rut, nombre, curso, nivel})
        console.log(chalk.bgGreen.blue(`DATOS AGREGADOS`))
        console.log(chalk.bgGreen.white(`Datos de ${nombre} ingresado correctamente.`));

    } catch (error) {

        console.log(chalk.bgRed(`X Error al conectat a la base de datos: ${error}`) )  
        

    } finally {

        client.release()
    }  
   
}

async  function eliminar (rut){

    try {

        client = await pool.connect()
        const text = "DELETE FROM estudiantes WHERE rut = $1";    
        const values =[rut]
        const response = await pool.query(text,values);
        console.log(chalk.bgRed.yellow(`Datos de ${rut} ELIMINADOS.`));

        
    } catch (error) {

        console.log(chalk.bgRed(`X Error al conectat a la base de datos: ${error}`) )  
        

    } finally {

        client.release()
    }
    
}

async  function actualizar (nombre,rut, curso, nivel){

    try {

        client = await pool.connect()
        const text = "UPDATE estudiantes SET nombre = $2, curso = $3, nivel = $4 WHERE rut = $1";
        console.table({rut, nombre, curso, nivel})
        const values =[rut, nombre, curso, nivel]
        const response = await client.query(text,values);
        console.log(chalk.bgBlue.green(`Datos de ${nombre} Actualizados.`));
        
    } catch (error) {

        console.log(chalk.bgRed(`X Error al conectat a la base de datos: ${error}`) )  
        

    } finally {

        client.release()
    }
    
}

module.exports = { seleccionar, listado, insertar, eliminar, actualizar };