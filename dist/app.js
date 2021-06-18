"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const x = merge({ name: 'Alexis', hobbies: ['Sports'] }, { age: 30 });
console.log(x.age);
function countAndPrint(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi there"));
console.log(countAndPrint(['Sports', 'Alexis']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Alexis' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Alexis");
textStorage.addItem("Es");
textStorage.addItem("Chido");
console.log(textStorage.getItems());
const genericTypes = new DataStorage();
const itemToRemove = { name: 'Alexis' };
genericTypes.addItem(itemToRemove);
genericTypes.addItem({ name: 'Navarrete' });
genericTypes.removeItem(itemToRemove);
console.log(genericTypes.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Alexis', 'Navarrete'];
