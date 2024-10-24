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

connection.query(`
    UPDATE clientes SET
    email = 'info@jocarsa.com'
    WHERE Identificador >= 21;
`, (error, resultado, campos) => {
  console.log(resultado);
});

connection.end();