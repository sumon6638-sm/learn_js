//1. let and const
const betterHalf = 'Modhu';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';


//2. templete string ``
const myNotes = `I am mojnu of ${betterHalf}. I don't have a laili. But i have ${phone}`
// console.log(myNotes);

// 3. default parameter && spreade or 3dots
function maxNumber(array = []) {
    const max = Math.max(...array);  //array spreading
    return max;
}

const biggest = maxNumber();
// console.log(biggest);

/*
4. arrow function
functin square(x){
    return x * x;
}
*/

const square = x => x * x;
console.log(square(8));