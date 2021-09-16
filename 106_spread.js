const numbers = [23, 65, 99, 21, 34];
// console.log(numbers); //that's will give you with array
//console.log(...numbers); //that's will give you without array


const max = Math.max(23, 99, 65, 21, 34); //that will give you the max number in max.

const maxInArray = Math.max(numbers); // that will give you error(NaN) because numbers is an array.

const maxInArray = Math.max(...numbers); //that will give you the max number from numbers array. cz "...numbers" is not return array, it's only return the value of index from an array.

// console.log(max, maxInArray);