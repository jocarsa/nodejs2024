const http = require('http');                       // Requiero uno de los módulos de node que es http
const server = http.createServer((req, res) => {    // Creo un servidor   
  res.writeHead(
      200, 
      { 
          'Content-Type': 'text/plain' 
      }
  );                                                // Devuelve texto plano                    
  res.end('<h1>Hola mundo desde Node</h1>');                 // Lanza este mensaje por pantalla
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});