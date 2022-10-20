
interface Result{
    winner:string;
    date:Date;
    result():string;
}
class Football implements Result{
    winner:string;
    #gyoztesgolszam:number;
    #vesztesgolszam:number;
    date:Date;
    constructor(winner:string,gyoztesgolszam:number,vesztesgolszam: number,date:Date){
        this.winner=winner;
        this.#gyoztesgolszam=gyoztesgolszam;
        this.#vesztesgolszam=vesztesgolszam;
        this.date=date;
    }
    result():string{
        return "Football match: " +this.#gyoztesgolszam + " - " + this.#vesztesgolszam;
    }
}
class Marathon implements Result{
    winner:string;
    futottido:number;
    date:Date;
    constructor(futottido: number,winner:string,date:Date){
        this.winner=winner;
        this.futottido= futottido;
        this.date=date;
    }
    result():string{
        return "Marathon: "+(Math.floor(this.futottido/60))+" min "+(Math.floor(this.futottido%60))+" s";
    }
}
class Calvinball implements Result{
    #winner:string;
    date:Date;
    rnd=Math.random()*90+10;
    get winner(){
        return this.#winner;
    }
    set winner(winner:string){
        if (winner!="Calvin") {
            this.#winner="Calvin";
        }else{
            this.#winner="Hobbes";
        }
    }
    constructor(winner:string,date:Date){
        this.#winner=winner;
        this.date=date;
        
    }
    result():string{
        return "Calvinball: "+Math.floor(this.rnd)+" points";
    }

}
let Results:Result[]=[
    new Football("Manchetser United",6,3,new Date("2022-10-19")),
    new Football("Chelsea",2,1,new Date("2022-09-10")),
    new Marathon(120,"Kovács Norbert",new Date("2022-08-09")),
    new Marathon(215,"Szabó Sándor",new Date("2022-09-12")),
    new Calvinball("Calvin",new Date("2022-07-23")),
    new Calvinball("Hobbes",new Date("2022-07-01"))
];
for(let eredmeny of Results){
    console.log(eredmeny.result());
}