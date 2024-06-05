
# Desafío - Always Music V2.

Un CRUD a una base de datos PostgreSQL, por consola de comando
 
![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)

## Estructura de Carpetas:
```

  └── 📁Always Music V2
      └── .env
      └── .gitignore
      └── 📁functions
          └── funciones.js 
      └── package-lock.json
      └── package.json
      └── README.md
      └── server.js
```

## Dependencias
```
  "dependencies": {
    "chalk": "^4.1.2",
    "pg": "^8.11.5"
  }

```

## instalacion
```
 https://github.com/VictorTapiaEgana/alwaysmusicv2.git
 cd alwaysmusicv2
 npm install
 npm start
```

## Script DASE DE DATOS:
```
CREATE DATABASE "AlwaysMusic"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
```

## Script de la TABLA:
```
CREATE TABLE IF NOT EXISTS public.estudiantes
(
    nombre character varying(200) COLLATE pg_catalog."default",
    rut character varying(200) COLLATE pg_catalog."default",
    curso character varying(100) COLLATE pg_catalog."default",
    nivel character varying(50) COLLATE pg_catalog."default"
)
```

## Definir un arcvhivo .ENV con las siguientes constantes:
```
DB_NAME=AlwaysMusic
DB_USER=
DB_PASSWORD=
POOL_MAX=5
POOL_IDLE=5000
POOL_TIMEOUT=10000 

```

## Uso

```
  npm start { ACCION, PARAMETRO....,PARAMETRO....,etc. }
```
  EJEMPLO:
```
     npm start insertar 44999666-8 Juan Java 7
```

  Esto, inserta un nuevo registro con el rut nombre curso y nivel, indicados 
  
  Otras acciones:

  ```
  npm start listado
  ```
Muestra los ususarios registrados en la bbdd
 ```
  npm start eliminar 44999666-8
 ```
Elimina el registro con el rut indicado  
 ```
  npm start actualizar 44999666-8 Jose Bootspring 10
 ```
Cambia el nombre,curso y nivel al registro com el rut 44999666-8 
 ```
  npm start seleccionar 44999666-8
 ```
devuelve el registro cuyo rut sea 44999666-8

