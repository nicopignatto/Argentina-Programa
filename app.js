"use strict";
class Persona {
    constructor() {
        this.mensaje = "Hola Mundo";
    }
    DecirMensaje() {
        return this.mensaje;
    }
    CambiarMensaje(nuevoMensaje) {
        this.mensaje = nuevoMensaje;
    }
    get Mensaje() {
        return this.mensaje;
    }
    set Mensaje(nuevoString) {
        this.mensaje = nuevoString;
    }
}
let Juan = new Persona();
Juan.CambiarMensaje("SR Mierda SEca");
Juan.Mensaje = "puto";
console.log(Juan.DecirMensaje());
