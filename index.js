const beli = require("./beli.js");

let  obj = [{
  item: "tomato",
  harga: 4,
  waktu: 1300
},
{
  item: "cheese",
  harga: 10,
  waktu: 1800
},
{
  item:"fresh bread",
  harga: 7,
  waktu: 1500
},
{
  item: "lettuce",
  harga: 2,
  waktu: 1000
},
{
  item: "mayonnaise",
  harga: 8,
  waktu: 1300
}];

var money = 40;

beli(money, obj[0])
  .then(function (kembalian) {
    return beli(kembalian, obj[1]);
  })
  .then(function (kembalian) {
    return beli(kembalian, obj[2]);
  })
  .then(function (kembalian) {
    return beli(kembalian, obj[3]);
  })
  .then(function (kembalian) {
    return beli(kembalian, obj[4]);
  })
  .then(function (kembalian) {
    console.log(' ----- Asik, bisa bikin sandwich deh ----- ');
  })
  .catch(function(kosong){
    console.log(" ----- Lain kali bawa uang lebih banyak deh ----- ");
  });

