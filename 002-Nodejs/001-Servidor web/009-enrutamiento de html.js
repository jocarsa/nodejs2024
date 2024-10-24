const http = require('http');                       // Requiero uno de los módulos de node que es http
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {    // Creo un servidor   
  res.writeHead(
      200, 
      { 
          'Content-Type': 'text/html' 
      }
  );                                                // Devuelve texto plano                    
  if (req.url === '/') {
    res.end('<h1>Página de inicio</h1>');
  } else if (req.url === '/sobremi') {
    res.end('<h1>Página acerca de mi</h1>');
  } else if (req.url === '/contacto') {
    res.end('<h1>Página de contacto</h1>');
  } else {
    res.end('404 Not Found');
  }
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});