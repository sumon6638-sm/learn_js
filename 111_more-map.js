const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length)//1ta array er moddho theke prottekta index er value er length gula ber korar niom.
console.log(fLengths);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const productName = products.map(product => product.name);
//console.log(productName);

const productPrices = products.map(product => product.price);
// console.log(productPrices);

// products.map(product => console.log(product)); //ekhetre kono kiso return korte hcce na...tai amra output k kono const ee rakhi ni....sorasori output dekhiye diyechi...

//21 line er same kaj ti amra forEach diye ooo korte pari...like as...jkhn kono kiso return korte na hoy...
products.forEach(product => console.log(product));

/*
Map vs forEach:
Ei 2tar kaj hubohu same...kin2 map pura kaj ta korar por j value gula show kore segula 1ta array akare return kore...kin2 forEach array akare show kore na...just kaj ta kore...kono kiso return kore na...
 */