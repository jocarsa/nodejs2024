const http = require('http');                       // Requiero uno de los módulos de node que es http
const fs = require('fs');

const server = http.createServer((req, res) => {    // Creo un servidor
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile("001-index.html", (err, datos) => {
                res.end(datos);
            });
        } else if (req.url === '/clientes') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({"mensaje":"ok"}))
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
