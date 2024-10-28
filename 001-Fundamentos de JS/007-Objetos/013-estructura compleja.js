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
            'direccion 1 de Jose Vicente',
            'Direccion 2 de Jose Vicente'
        ]
    );



console.log(persona);