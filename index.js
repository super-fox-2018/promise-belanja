const beli = require('./beli');

class Item {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

const money = 100000;
const burger = new Item('Burger', 45000, 3500);
const bubbleTea = new Item('Bubble Tea', 20000, 4000);
const takoyaki = new Item('Takoyaki', 15000, 2000);
const cola = new Item('Cola', 5000, 500);
const iceCream = new Item('Ice Cream', 6000, 1000);

beli(money, burger)
  .then(change => beli(change, bubbleTea))
  .then(change => beli(change, takoyaki))
  .then(change => beli(change, cola))
  .then(change => beli(change, iceCream))
  .catch(err => console.warn(err));