//creo una instancia de la fecha o molde
//date es un objeto o instancia
//cada objeto tiene varios metodos

const date = new Date();

date.getDate();

//crear metodos con parametros de entrada
//constructor
const date2 = new Date(1993,1,12);
date2.getDate();

console.log(date);
console.log(date2);

//creamos una clase
//let - var- const es el alcance 

let myVar;
export class MyDate{
    //dentro de las clases no es necesario definir el alcance de las variables
    year   : number ;
    month  : number ;
    day    : number ;

    /*creo el constructor que es igual a inicializar las variables*/
    constructor(year:number,month:number,day:number){
        //esta variable si inicializa desde el constructor
        this.year=year;
        this.month=month;
        this.day=day;

    }
}
    const myDate = new MyDate(2023,2,13);
    console.log(myDate);
