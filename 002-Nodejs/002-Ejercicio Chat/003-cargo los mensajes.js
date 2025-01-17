const http = require('http');                       // Requiero uno de los módulos de node que es http
const fs = require('fs');
const path = require('path');

var mensajes = [
    {"mensaje":"primer mensaje"},
    {"mensaje":"segundo mensaje"},
]

const server = http.createServer((req, res) => {    // Creo un servidor
    
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile("miweb/002-mensajes.html", (err, datos) => {
                res.end(datos);
            });
        } else if (req.url === '/mensajes') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(mensajes))
        } else if (req.url === '/insertar') {
           res.end("")
        } else {
           fs.readFile("miweb/404.html", (err, datos) => {
                res.end(datos);
            });
        }
  
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});