const http = require('http');                       // Requiero uno de los módulos de node que es http
const server = http.createServer((req, res) => {    // Creo un servidor   
  res.writeHead(
      200, 
      { 
          'Content-Type': 'text/html' 
      }
  );                                                // Devuelve texto plano                    
  var agenda = {
      "nombre":"Jose Vicente",
      "apellidos":"Carratala Sanchis",
      "email":"info@jocarsa.com"
  }
    res.end(JSON.stringify(agenda));                 // Lanza este mensaje por pantalla
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});