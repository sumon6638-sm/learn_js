//filter er kaj motamoti map er moto kin2 filter & map er main difference holo amr kiso check point(condiiton) thakbe sei onujaye ami kawk nibo kawk nibo na.


const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);

const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);


const luckyNumbers = numbers.filter(number => (number % 2) == 0);
// console.log(luckyNumbers);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];


const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const pinki = products.filter(product => product.color == 'pink');
// console.log(pinki); //it will return an array...

const blacks = products.filter(product => product.color == 'black');
// console.log(blacks); //it will return an array... and return all of those element which are matched.

const blue = products.filter(product => product.color == 'blue');
// console.log(blue);  //it will return an empty array...cz blue is not available at products

const whiteItem = products.find(product => product.color == 'black');
// console.log(whiteItem); //it will return an element... and return only the first element which is matched...match na hoile undefined dibe...