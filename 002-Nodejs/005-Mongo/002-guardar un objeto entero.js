const { MongoClient } = require('mongodb');

class Persona{
    constructor(
            nuevonombre,
            nuevosapellidos,
            nuevaedad,
             nuevasdirecciones
        ){
        this.nombre = nuevonombre;
        this.apellidos = nuevosapellidos;
        this.edad = nuevaedad;
        this.direcciones = nuevasdirecciones
    }
    saluda(){
        return "Hola soy "+this.nombre+" y te saludo"
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre;
    }
    getNombre(){
        return this.nombre
    }
}




var persona = new Persona(
        "Jose Vicente",
        "Carratala Sanchis",
        46,
        [
            {'trabajo':'direccion 1 de Jose Vicente'}
            ,
            {'personal':[
                'La casa 1 de Jose Vicente',
                'La casa 2 de Jose Vicente'
            ]}
        ]
    );

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('negocio'); 
    const collection = database.collection('clientes'); 
    const clientes = await collection.insertOne(persona);
    console.log(clientes);
  } finally {
    await client.close();
  }
}

run().catch(console.error);