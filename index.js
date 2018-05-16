const beli = require('./beli.js')

let uang = 50000


let Roti = {
  item: 'Roti',
  harga: 16000,
  waktu: 3000
}
let Royco = {
  item: 'Royco',
  harga: 10000,
  waktu: 500
}
let TisuBasah = {
  item: 'Tissue Basah',
  harga: 26000,
  waktu: 1000
}
let Teflon = {
  item: 'Teflon Anti Lengket',
  harga: 410000,
  waktu: 1000
}
let Adidas = {
  item: 'Adidas NMD',
  harga: 3000000,
  waktu: 1900
}








beli(uang, Adidas)
  .then(function(kembalian) {

    return beli(kembalian, TisuBasah)

  })

  .then(function(kembalian) {
    return beli(kembalian, Teflon)
  })

  .then(function(kembalian) {
    return beli(kembalian, Royco)
  })
  .then(function(kembalian) {
    return beli(kembalian, Roti)
  })

  .catch(function(kembalian) {
    return "";
  })
// beli(sisa, Teflon, function Sisa(sisa) {
//
//   beli(sisa, TisuBasah, function Sisa(sisa) {
//
//     beli(sisa, Royco, function Sisa(sisa) {
//
//       beli(sisa, Roti, function Sisa(sisa) {
//
//       })
//
//     })
//
//   })
//
// })
