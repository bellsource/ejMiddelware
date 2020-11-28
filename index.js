/**
 * Ejemplo de programación de una  web Api que va a utilizar un Middelware
 */

 const express = require ("express");//obtenemos la dependencia express
 
 //Creo el servidor
 const server = express();

 //Setear donde se escucha ese server
 server.listen(3000 , () => {
    console.log("servidor iniciado...");
 })