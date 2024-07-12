const express=require("express");

//Server

const app = express();
app.set("port",4000)
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"));


//Rutas

app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/login.html"))