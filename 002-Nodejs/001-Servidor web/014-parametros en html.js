const http = require('http');                       // Requiero uno de los módulos de node que es http
const fs = require('fs');
const path = require('path');
var contador = 0;
const server = http.createServer((req, res) => {    // Creo un servidor
    contador++;
    
    const representar = (filePath) => {
        fs.readFile(filePath, 'utf8', (err, datos) => {
            const pageWithCounter = datos.replace('{{contador}}', contador);
            res.end(pageWithCounter);
        });
    };
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
        if (req.url === '/') {
            representar("miweb2/index.html");
        } else if (req.url === '/sobremi') {
           representar("miweb2/sobremi.html");
        } else if (req.url === '/contacto') {
           representar("miweb2/contacto.html");
        } else {
           representar("miweb2/404.html");
        }
  
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});