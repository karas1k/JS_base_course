'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    console.log(`Старая цена ${product.price}, c учетом скидки в 15% = ${product.price *= 0.85}`);
});

// Второе решение

for (let i in products) {
    products.price *= 0.85
    console.log(`Цена со скидкой: ${products[i]['price']}`);
}
