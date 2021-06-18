type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Alexis",
  startDate: new Date(),
  privileges: ["create-server"],
};

type Combinable = string | number;
type Numeric = number | boolean;

type NumericCombinable = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);
const fetchedUserData = {
  id: "url",
  name: "Alexis",
  job: {
    title: "CEO",
    description: "My own company",
  },
};
// Si conocemos y podemos garantizar la existencia de la propiedad simplmente hacemos esto, si no, hacemos lo siguiente:
console.log(fetchedUserData.job.title);
//siguiente = esto de abajo, verifica si existe de izquierda a derecha
console.log(fetchedUserData.job && fetchedUserData.job.title);
//de la forma de arriba no genera Runtime errors, RE solo no funciona porque no existe job.

//La forma de resolverlo es usar el operador ?
console.log(fetchedUserData?.job?.title);

const userInput = null;

const storeData = userInput || 'DEFAULT';


/*
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee){
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start date: ' + emp.startDate);
    }

}    

printEmployeeInformation(e1);

class Car{
    drive(){
        console.log("Driving...");
    }
}
class Truck{
    drive(){
        console.log("Driving truck...");
    }
    loadCarg(amount:number){
        console.log("Loading carg: " + amount);
    }
}

type Vehicle= Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive(); //lo comparten en común
    //esto jala
    if(vehicle instanceof Truck){ 
        vehicle.loadCarg(10);
    }
}

interface Bird {
    type: 'bird'
    flyingSpeed: number, 

}

interface Horse{
    type: 'horse'
    runningSpeed: number, 
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    console.log("Moving at speed: " + speed);
}

const paragraph = document.getElementById('message-output');
const userInput =  document.getElementById('user-input')!;
if(userInput){
    (userInput as HTMLInputElement).value = "Hola como te va";
}

interface ErrorContainer {
    [prop: string]:string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: "Must start with a cappital letter"
}

*/
