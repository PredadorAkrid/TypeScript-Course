/*
const names: Array<string> = [];
//promesas en JS
const promise = new Promise<string>( (resolve, reject) => {
    setTimeout( () => {
        resolve('This is done!');
    }, 2000);
});

const x = promise.then(data => {
    return data.split(' ');
})
console.log(x)
*/


function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const x = merge({name: 'Alexis', hobbies: ['Sports']}, {age: 30});
console.log(x.age);

// la llamada a funcion nos generaría por ejemplo { age: 23, name: 'Alexis' }

interface Lenghty{
    length: number;
}


function countAndPrint<T extends Lenghty>(element: T): [T, string]{
    let descriptionText = "Got no value";
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    }else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements';
    }
        
    return [element, descriptionText];
}

console.log(countAndPrint("Hi there"));
console.log(countAndPrint(['Sports', 'Alexis']));

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({name:'Alexis'}, 'name'));


class DataStorage<T extends number|string|boolean|object> {
    private data: T[] = [];
    
    addItem(item: T){
        this.data.push(item);
    }
    /*
    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }

    */

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data]
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("Alexis")
textStorage.addItem("Es")
textStorage.addItem("Chido")
console.log(textStorage.getItems())

const genericTypes = new DataStorage<object>();

//genericTypes.addItem({name:'Alexis'});
//genericTypes.addItem({name:'Navarrete'});
//vamos a obtener un bug si hacemos
//genericTypes.removeItem({name:'Navarrete'}) //aparentemente esto va a borrar el item Navarrete, pero no, por como estaba la implementación comentada
//de remove item, el indexOf regresa -1 que dice que no encontró la referencia en memoria, con lo cual empieza al final del arreglo y borra un item, por eso
//es que borra navarrete, entonces si le pasamos esto
//genericTypes.removeItem({name:'Alexis'}) //seguirá borrando Navarrete por lo mismo dicho anteriormente, esto es dado que estamos pasando un nuevo objeto y no la referencia en memoria al 
//otro objeto que queremos eliminar, pa solucionarlo hay que usar el nuevo método removeItem junto con lo siguiente:

const itemToRemove = {name:'Alexis'}
genericTypes.addItem(itemToRemove);
genericTypes.addItem({name:'Navarrete'});
genericTypes.removeItem(itemToRemove) //ahora si pasamos la referencia en memoria AL MISMO objeto
console.log(genericTypes.getItems());

interface CourseGoal{
    title:string;
    description: string;
    completeUntil: Date;

}

function createCourseGoal(title:string, description:string, date: Date ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; //porque ya podemos garantizar que tiene la escructura completa
}

const names: Readonly<string[]> = ['Alexis', 'Navarrete'];
//names.push('Puebla'); //no podemos hacer push porque es una propiedad de readonly
