
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
enum Role {ADMIN = 1, READ_ONLY, AUTHOR }; //apartir del indice incrementan ADMIN = 1



const person = {
    name: 'Alexis',
    age: 23,
    hobbies: ['Hola', 'Hola2'],
    role: Role.ADMIN 
}
