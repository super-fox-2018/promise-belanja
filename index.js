const beli = require('./beli.js');

class Food {
  constructor(obj) {
    this.item = obj.item;
    this.harga = obj.harga;
    this.waktu = obj.waktu;
  }
}

let nasi = new Food({ item: 'nasi', harga: 2000, waktu: 5000 });
let bubur = new Food({ item: 'bubur', harga: 10000, waktu: 6000 });
let indomie = new Food({ item: 'indomie', harga: 5000, waktu: 5000 });
let ayamGeprek = new Food({ item: 'ayam geprek', harga: 25000, waktu: 5000 });
let lele = new Food({ item: 'lele', harga: 15000, waktu: 3000 });

let money = 100000;

beli(money, nasi)
.then(function(kembalian) {
  // beli(kembalian, ayamGeprek)
  // .then() --> DONT DO THIS
  // instead return the Promise, to prevent nested Promise
  return beli(kembalian, ayamGeprek);
})
.then(function (kembalian) {
  // console.log(kembalian);
  return beli(kembalian, indomie);
})
.then((kembalian) => {
  return beli(kembalian, lele);
})
.then((kembalian) => {
  return beli(kembalian, bubur);
});