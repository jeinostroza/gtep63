let nombre: string = 'Hola mundo'
console.log(nombre);

let tupla: [number, string, boolean];
tupla = [23,'Manuel', true];

console.log(tupla[2]);

function sumar(a:number,b:number):number{
    return a+b;
}

const suma:number = sumar(2.5,2.3);
console.log(suma)


function mostrar():void{
    console.log('Funcion')
}


//parametros por defecto

const mostrar1 =(nombre:string, apellido:string, edad:number)=>{
    return `Se llama ${nombre}, su apellido es ${apellido} y su edad es ${edad}`;
}
console.log(mostrar1('Jorge',"Inostroza",50))


const  cartaPostres = (postre:string,...frutas:string[]):void=>{
    console.log(`El postre es ${postre} y tiene ${frutas}`)
}

cartaPostres('postre1','naranja','platano','fresa')



//CLASES

class Vehiculo{
    marca:string
    fecha:string
    puertas:number

    constructor(marca_:string, fecha_:string,puertas_:number){
        this.marca = marca_
        this.fecha = fecha_
        this.puertas = puertas_
    }

    acelerar():void{
        console.log('ojo que acelero')
    }

    frenar():void{
        console.log(`ojo que freno`)
    }
}

const coche = new Vehiculo('Ford','12/7/2018',4)
console.log(coche.marca)
coche.acelerar();
coche.frenar();


class Padre{
    nombre:string
    edad:number

    constructor(nombre_:string, edad_:number){
        this.nombre= nombre_
        this.edad = edad_
    }

    mostrarNombre(){
        console.log(this.nombre)
    }
}

class Hijo extends Padre{
    apellido:string

    constructor(nombre_:string, edad_:number, apellido_:string){
        super(nombre_,edad_)
        this.apellido = apellido_
    }
    mostrarnombrehijo():void{
        console.log(this.nombre)
    }
}

const nuevoHijo = new Hijo('Manuel',22, 'Munoz')
nuevoHijo.mostrarNombre()


class Animal{
    nombre:string
    tamano:number

    constructor(nombre_:string,tamano_:number){

        this.nombre = nombre_
        this.tamano = tamano_
    }

    moverse():void{
        console.log(`Me estoy moviendo`)
    }
}

const ani = new Animal('Serpiente', 2)
ani.nombre = 'Lagartija'

console.log(ani.nombre)

//modificador privado

class Animal1{
    nombre:string
    tamano:number

    constructor(nombre_:string,tamano_:number){

        this.nombre = nombre_
        this.tamano = tamano_
    }

    moverse():void{
        console.log(`Me estoy moviendo`)
    }
}

const ani1 = new Animal('Serpiente', 2)
ani.nombre = 'Lagartija'

console.log(ani.nombre)


interface Persona{
    nombre:string
    apellido:string

  
}

function caminar(persona:Persona):void{
    console.log(`La persona ${persona.nombre} ${persona.apellido} esta caminando`)
}

let nueva_persona:Persona = {nombre:"Jorge", apellido:"Inostroza"}
caminar(nueva_persona)
