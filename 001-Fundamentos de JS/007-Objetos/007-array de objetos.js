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

console.log(personas);