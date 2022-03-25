class Persona
{
    private mensaje: string;

    constructor()
    {
        this.mensaje= "Hola Mundo";
    }
    public DecirMensaje():string
    {
       return this.mensaje; 
    }

    public CambiarMensaje(nuevoMensaje:string):void
    {
        this.mensaje=nuevoMensaje;
    }

    public get Mensaje():string
    {
        return this.mensaje;
    }

    public set Mensaje(nuevoString:string)
    {
        this.mensaje=nuevoString;        
    }
}

let Juan= new Persona();
Juan.CambiarMensaje("SR Mierda SEca");
Juan.Mensaje="puto";
console.log(Juan.DecirMensaje());