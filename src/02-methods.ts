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
    //funcionalidades o methods
    //retonar un string
    printformat():string{
        return `${this.day}/${this.month}/${this.year}`;
    }

    //literal type
    add(amount:number, type:"days" | "months" | "years"){
        if (type==="days") {
           this.day +=amount; 
        }
        if (type==="months") {
            this.month +=amount; 
        }
        if (type==="years") {
            this.year +=amount; 
        }
    }

}
const myDate = new MyDate(1999,1,1);
console.log(myDate.printformat());
myDate.add(3,"days");
console.log(myDate.printformat());
