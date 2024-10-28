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
}

var persona1 = new Persona(
    "Jose Vicente",
    "Carratala Sanchis",
    46
);
var persona2 = new Persona(
    "Juan",
    "Lopez Martinez",
    46
);

console.log(persona1);
console.log(persona2);