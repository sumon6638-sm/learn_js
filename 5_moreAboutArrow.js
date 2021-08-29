const multiply = (num1, num2, num3) => num1 * num2 * num3;
//                  function            returnPart&kaj
const result = multiply(4, 12, 3);


const fiveTimes = num => num * 5;
const value = fiveTimes(17);


//arrow function without parameter
const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);


//multi task operation with arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);
