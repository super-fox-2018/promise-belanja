'use strict'

const beli = require('./beli.js');

var uang = 320000;

let food = [
    { item :'chicken katsu', 
    harga: 40000, 
    waktu: 1000 },

    { item: 'Beef Burger', 
    harga: 50000, 
    waktu: 1200},

    {item :'vanila ice cream', 
    harga: 45000, 
    waktu: 1800},

    {item: 'hot pot', 
    harga: 80000, 
    waktu: 2000},

    {item: 'meat lovers', 
    harga: 100000, 
    waktu: 2200},

    {item: 'roasted milk tea', 
    harga: 25000, 
    waktu: 1000}
];

beli(uang, food[0].item)
    .then(function (kembalian) {
        return beli(kembalian, food[1].item);
    })
    .then(function (kembalian) {
        return beli(kembalian, food[2].item);
    }) 
    .then(function (kembalian) {
        return beli(kembalian, food[3].item);
    })
    .then(function (kembalian) {
        return beli(kembalian, food[4].item);
    })
    .then(function (kembalian) {
        return beli(kembalian, food[5].item);
    })
    .catch(function(kembalian) {
        return 'Finish eat!';
    })