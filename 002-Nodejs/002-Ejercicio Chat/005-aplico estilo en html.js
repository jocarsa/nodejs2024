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
            fs.readFile("miweb/004-estilizamos.html", (err, datos) => {
                res.end(datos);
            });
        } else if (req.url === '/mensajes') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(mensajes))
        } else if (req.url === '/insertar' && req.method === 'POST') {
           // Collect the data chunks
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();  // Convert buffer to string
        });
        
        req.on('end', () => {
            try {
                const newMessage = JSON.parse(body);  // Parse the received JSON
                if (newMessage.mensaje) {  // Check if 'mensaje' exists
                    mensajes.push(newMessage);  // Add the new message to the array
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'success', mensajes }));
                } else {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'error', message: 'No mensaje provided' }));
                }
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'error', message: 'Invalid JSON' }));
            }
        });
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