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
    INSERT INTO clientes
    VALUES (
        NULL,
        'Empresa desde node',
        'direccion de la empresa',
        '46000',
        'Valencia',
        '12345g',
        'info@josevicentecarratala.com',
        '5345345'
    )`, (error, resultado, campos) => {
  console.log(resultado);
});

connection.end();