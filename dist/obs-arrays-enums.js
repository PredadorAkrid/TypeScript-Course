"use strict";
/*
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
}= {
    name: 'Alexis',
    age: 23,
    hobbies: ['Hola', 'Hola2'],
    role: [2, 'author']
}

let favoriteActivities: string[];

for(const hobbies of person.hobbies){
    console.log(hobbies.toUpperCase())
}

*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
; //apartir del indice incrementan ADMIN = 1
const person = {
    name: 'Alexis',
    age: 23,
    hobbies: ['Hola', 'Hola2'],
    role: Role.ADMIN
};
