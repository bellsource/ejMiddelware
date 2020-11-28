/**
 * Ejemplo de programación de una  web Api que va a utilizar un Middelware
 */

 const express = require ("express");//obtenemos la dependencia express
 
 //Creo el servidor
 const server = express();

//Creo funcion que no hace nada sino seteo el middleware
function loguearRuta(req,res,next){
    console.log("Esta accediendo a la ruta: " + req.path);
    next();
}

//Middelware
//utilización del middelware a nivel server, en su totalidad
server.use(loguearRuta);

//para saber si funciona
server.get("/" , (req,res) => {
    res.send("esta es una ruta de prueba");
})

//creo otra ruta
server.get("/prueba" , (req,res) => {
    res.send("esta es otra ruta de prueba");
})

 //Setear donde se escucha ese server
 server.listen(3000 , () => {
    console.log("servidor iniciado...");
 })