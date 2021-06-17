const userName = 'Alexis';

let age = 30;
age = 29;

var result;

function add(a:number, b: number){
    result = a + b;
    return result 
}
const add2 = (a:number, b:number) => {
    return a+b
};

const add3 = (a:number, b:number) => a+b; //solo si tenemos una linea de código hace lo mismo que add y add2

const printOutput: (a: number|string) => void = output => console.log(output);

//podemos tener default values

const add4 = (a:number, b:number = 1) => a+b;

console.log(add4(10)); //nos da 11 pero los default parameters debe estar de derecha a izquierda obligatoriamente

const hobbies = ['nadar', 'correr'];
const activeHobbies = ['bicicleta']; //los arreglos son objetos y los objetos, referencias a memoria 


activeHobbies.push(...hobbies); //al hacer esto estamos evitando tener la referencia, i.e

const add5 = (...numbers: number[])  => {
     
    return numbers.reduce((currResult, currValue ) =>  {
        return currResult + currValue
    }, 0) ; //numbers.forEach equivalent
    
};

console.log(add5(1,2,3,4,5.5))

const [hobby1, hobby2] = hobbies;


