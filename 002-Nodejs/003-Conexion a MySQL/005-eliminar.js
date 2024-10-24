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
    DELETE FROM clientes 
    WHERE Identificador >= 21;
`, (error, resultado, campos) => {
     if (error) {
    return console.error('Error en la consulta: ' + error.message);
  }
  console.log(resultado);
});

connection.end();