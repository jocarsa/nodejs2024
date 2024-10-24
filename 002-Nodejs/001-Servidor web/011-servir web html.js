const http = require('http');                       // Requiero uno de los módulos de node que es http
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {    // Creo un servidor   
  fs.readFile("miweb/index.html", (err, datos) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(datos);
  });
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});