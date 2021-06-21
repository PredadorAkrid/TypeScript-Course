function Logger(logString: string) {
  console.log("Estamos en Logger");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends { new (...args: any[]): {name: string} }>(
      originalConstructor: T
    ) {
      return class extends originalConstructor {
        constructor(..._: any[]) {
          super();
          console.log('Rendering template');
          const hookEl = document.getElementById(hookId);
          if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = this.name;
          }
        }
      };
    };
  }

@Logger("Loggging-string")
@WithTemplate("<h1>My person object </h1>", "app") //activa el decorador antes de crear la clase, la ejecución de las funciones del decorador ocurren de abajo hacia arriba y la ejecución
//de arriba a abajo, por eso primero imprime lo del primer decorador y luego lo del segundo, y después al revés al ejecutas la función real del decorador
class Person {
  name = "Alexis";
  constructor() {
    console.log("Creating new person....");
  }
}


function Log(target: any, propertyName: string | Symbol) {
  /*console.log("Property decorator");
  console.log(propertyName, target);*/
}

function Log2(target:any, name:string, descriptor:PropertyDescriptor){
    /*console.log("Accesor decorator");
    console.log(target)
    console.log(name)
    console.log(descriptor)*/
}

function Log3(target: any, name:string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor{
    /*console.log("Method decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)*/
    return {};
    
}

function Log4(target: any, name: string | Symbol, position: number){
    /*console.log("Parameter decorator")
    console.log(target)
    console.log(name)
    console.log(position)*/
}
class Product {
  @Log
  title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set Price(val: number) {
    if (val > 0) {
      this._price = val;
    }
    throw new Error("Invalid price- must be positive value");
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
      return this._price * (1+tax);
  }
}
const p3 = new Product("Producto 1", 200);
const p4 = new Product("Producto 1", 200);

function Autobind(_:any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
        
    }
    return adjDescriptor;

}


class Printer{
    message = "This works!";
    @Autobind
    showMessage(){
       console.log(this.message); 
    }
}
const printer =  new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage)
//podemos hacer lo mismo con JS puro y nos ahorramos el decorador de la siguiente forma
//button.addEventListener('click', printer.showMessage.bind(printer));


interface ValidatorConfig{
    [property: string]: {
        [validatableProp: string]: string[] //['required', 'positive']
    }
}


const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]; //!! convierte a true o false el valor
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
