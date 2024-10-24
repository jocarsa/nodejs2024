const http = require('http');                       // Requiero uno de los módulos de node que es http
const fs = require('fs');
const path = require('path');
var contador = 0;
const titulo = "La web de Jose Vicente"
const server = http.createServer((req, res) => {    // Creo un servidor
    contador++;
    
    const representar = (filePath) => {
        fs.readFile(filePath, 'utf8', (err, datos) => {
            const pageWithCounter = datos.replace('{{titulo}}', titulo);
            res.end(pageWithCounter);
        });
    };
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
        if (req.url === '/') {
            representar("miweb3/index.html");
        } else if (req.url === '/sobremi') {
           representar("miweb3/sobremi.html");
        } else if (req.url === '/contacto') {
           representar("miweb3/contacto.html");
        } else {
           representar("miweb3/404.html");
        }
  
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});