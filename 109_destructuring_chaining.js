const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };
/* 
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;
 */

// Ei sb gula 1line use kora jay
const { phone, price, dress, id } = fish; //it's called destructuring.


// destructuring array 
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);

const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu);
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

// console.log(phone, price);


//chaining vs distructuring
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;
/* 
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);

 */

console.log(company.web.tech.third);

 
console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);

