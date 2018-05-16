const beli = require('./beli');

class Barang{
  constructor(item, harga, waktu){
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}
let uang = 10000;
let susu = new Barang('susu', 5000, 3600);
let beras = new Barang('beras', 1000, 3600);
let dendeng = new Barang('dendeng', 1000, 3600);
let indomi = new Barang('indomi', 1000, 3600);
let kwaci = new Barang('kwaci', 1000, 3600);


// beli(uang, susu, function(kembalian){
//   beli(kembalian, beras, function(kembalian){
//     beli(kembalian, dendeng, function(kembalian){
//       beli(kembalian,indomi, function(kembalian){
//         beli(kembalian, kwaci, function(kembalian){
//           console.log('selesai belanja');
//         })
//       })
//     })
//   })
// })

beli(uang, susu)
  .then(function(kembalian){
    return beli(kembalian, beras);
  })
  .then(function(kembalian){
    return beli(kembalian, dendeng);
  })
  .then(function(kembalian){
    return beli(kembalian, indomi);
  })
  .then(function(kembalian){
    return beli(kembalian, kwaci);
  })
  .catch(function(notif){
    console.log(notif)
  })
