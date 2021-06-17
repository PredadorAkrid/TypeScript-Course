type Combinable = 'as-number' | 'as-text'

function combine(input1: number | string, input2: number | string, resultType: 'as-number'|'as-text'){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' && resultType === 'as-number'){
        return  result = +input1 + +input2;
    }else{
        return result = input1.toString() + input2.toString();
    }
    
 
 
}

function add(x: number, y: number){
    return x+y;
}

const combineAges = combine(30,20, 'as-number');
const combineNames = combine('Alexis', ' Navarrete', 'as-text')
const combineNamesNumber = combine('10', ' 20', 'as-number')



//let combineValues: Function; forma 1
//let combineValues: () => number; forma 2
let combineValues: (a:number, b:number) => number;


combineValues = add;

console.log(combineValues(1,2));

function addAndHandle(n1: number, n2: number, cb: (num:number) => void){
    const result = n1 + n2;
    cb(result);
}

console.log(addAndHandle(1,200, (result) => {
    return result;
}))

function generateError(message:string, code:number){
    throw {message: message, errorCode: code}
}

const button = document.querySelector('button')!;
button.addEventListener('click', () => {
    console.log("Clicked!");
});

 
