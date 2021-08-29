const numbers = [4, 6, 8, 10];
const output = [];


/*
//By function
function doubleOld(number) {
    return number * 2;
}
 */


//By arrow function
const doubleIt = number => number * 2;



for (const number of numbers) {
    //const result = number * 2;
    const result = doubleIt(number); //for arrow function
    output.push(result);
}
//console.log(output);


//Uporer sbgula kaj amra map er maddhome ekline ee kore felte pari....
//****Mapping System****
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array


// const output2 = numbers.map(doubleIt);
// const output2 = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output2);

const squares = numbers.map(x => x * x);
console.log(squares);