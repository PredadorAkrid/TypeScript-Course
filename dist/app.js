"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
class Student {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
        else {
            this.name = "";
            console.log("hi");
        }
    }
    greet() {
        console.log("Hola mi nombre es: " + this.name);
    }
}
const student1 = new Student("Alexis");
student1.greet();
