const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',   
  user: 'negocio',        
  password: 'negocio', 
  database: 'negocio'   
});

connection.connect((err) => {
  console.log('Conectado', connection.threadId);
});

connection.query('SELECT * FROM clientes', (error, resultados, campos) => {
  console.log(resultados);
});

connection.end();