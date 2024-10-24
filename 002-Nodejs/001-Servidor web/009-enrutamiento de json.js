const http = require('http');                       // Requiero uno de los módulos de node que es http
const server = http.createServer((req, res) => {    // Creo un servidor   
  res.writeHead(
      200, 
      { 
          'Content-Type': 'text/json' 
      }
  );                                                // Devuelve texto plano
    var productos = {"nombre":"producto1"}
    var clientes = {"nombre":"jose Vicente Carratala Sanchis"}
    var pedidos = {"fecha":"2024-10-24"}
  if (req.url === '/productos') {
    res.end(JSON.stringify(productos));
  } else if (req.url === '/clientes') {
    res.end(JSON.stringify(clientes));
  } else if (req.url === '/pedidos') {
    res.end(JSON.stringify(pedidos));
  } else {
    res.end(JSON.stringify({"resultado":"ko"}));
  }
});
const PORT = 3000;                                  // Escucho en el puerto 3000
server.listen(PORT, () => {                         // Cuando reciba una peticion
  console.log('Servidor en marcha');                // Puedo logear algo en servidor
});