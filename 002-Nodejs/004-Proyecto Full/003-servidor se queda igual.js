const http = require('http');                       
const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',   
  user: 'negocio',        
  password: 'negocio', 
  database: 'negocio'   
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado', connection.threadId);
});

const server = http.createServer((req, res) => {    
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("003-cliente.html", (err, datos) => {
      if (err) {
        res.writeHead(500);
        res.end('Error leyendo el archivo');
        return;
      }
      res.end(datos);
    });
  } else if (req.url === '/clientes') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    connection.query('SELECT * FROM clientes', (error, resultados) => {
      if (error) {
        res.writeHead(500);
        res.end('Error en la consulta de base de datos');
        return;
      }
      res.end(JSON.stringify(resultados));
    });
    
  } else {
    fs.readFile("miweb/404.html", (err, datos) => {
      if (err) {
        res.writeHead(500);
        res.end('Error leyendo el archivo 404');
        return;
      }
      res.writeHead(404);
      res.end(datos);
    });
  }
});

const PORT = 3000;                                  
server.listen(PORT, () => {                         
  console.log(`Servidor en marcha en el puerto ${PORT}`);
});

// Opcional: cerrar la conexión cuando el servidor se detenga
process.on('SIGINT', () => {
  console.log('Apagando servidor...');
  connection.end((err) => {
    if (err) {
      console.error('Error cerrando la conexión a la base de datos:', err);
    } else {
      console.log('Conexión a la base de datos cerrada');
    }
    process.exit();
  });
});
