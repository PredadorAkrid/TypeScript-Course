// solo las estructuras
interface Greetable   {
    name: string;
    greet(phrase: string): void;
}

class Person implements Greetable{
    name:string;

    constructor(name:string){
        this.name = name;
    }
    greet(phrase:string){
        console.log(phrase + this.name);
    }

}







//interfaces con atributos y métodos opcionales de implementar
interface Named{  
    name:string; 
    outPutName?: string;
}

interface Greetable extends Named{
    greet(phrase:string): void;


}

class Student implements Greetable{
    readonly name:string;
    age = 30;
    constructor(n?:string){
        if(n){
            this.name = n;
        }else{
            this.name = "";
            console.log("hi")
            
        }
            
    }
    greet(): void{
        console.log("Hola mi nombre es: " + this.name);
    }
}


const student1 = new Student("Alexis")
student1.greet()