class Persona{
    constructor(
            nuevonombre,
            nuevosapellidos,
            nuevaedad
        ){
        this.nombre = nuevonombre;
        this.apellidos = nuevosapellidos;
        this.edad = nuevaedad;
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

var personas = [];

personas.push(
    new Persona(
        "Jose Vicente",
        "Carratala Sanchis",
        46
    )
);
personas.push(
    new Persona(
        "Juan",
        "Garcia Martinez",
        46
    )
);

console.log(personas[0].saluda());
console.log(personas[0].getNombre());