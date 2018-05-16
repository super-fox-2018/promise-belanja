const beli = require('./beli');

class Sepatu {
  constructor() {
    this.item = 'Sepatu'
    this.harga = 200000
    this.waktu = 3000
  }
}

class Baju {
  constructor() {
    this.item = 'Baju'
    this.harga = 150000
    this.waktu = 3000
  }
}

class IkatPinggang {
  constructor() {
    this.item = 'Ikat Pinggang'
    this.harga = 100000
    this.waktu = 3000
  }
}

class Jam {
  constructor() {
    this.item = 'Jam'
    this.harga = 300000
    this.waktu = 3000
  }
}

class Tas {
  constructor() {
    this.item = 'Tas'
    this.harga = 300000
    this.waktu = 3000
  }
}

let sepatu = new Sepatu()
let baju = new Baju()
let ikatPinggang = new IkatPinggang()
let jam = new Jam()
let tas = new Tas()

let uang = 1000000

beli(uang, sepatu)

.then((kembalian) => {
    return beli(kembalian,baju)
})
.then((kembalian) => {
    return beli(kembalian, ikatPinggang)
})
.then((kembalian) => {
    return beli(kembalian, jam)
})
.then((kembalian) => {
    return beli(kembalian, tas)
})
.catch((err) => {
    console.log('uang gak cukup boss')
})

// beli(1000000,sepatu,function(kembalian) {
//   beli(kembalian,baju,function(kembalian){
//     beli(kembalian,ikatPinggang,function(kembalian){
//       beli(kembalian,jam,function(kembalian){
//         beli(kembalian,tas,function(kembalian){
//         })
//       })
//     })
//   })
// })
