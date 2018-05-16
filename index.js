var beli = require('./beli.js');

let cupcakes = {item : 'cupcakes chocolate',harga : 25000, waktu: 1000};
let cheesecakes = {item : 'cheesecakes',harga : 225000, waktu: 500};
let chocolatecakes = {item : 'chocolatecakes',harga : 200000, waktu: 700};
let rainbowcakes = {item : 'rainbowcakes',harga : 215000, waktu: 1100};
let donuts = {item : 'donuts',harga : 15000, waktu: 400};
let uang = 1500000;

beli(uang,cupcakes)
  .then(function(kembalian){
    // var kembalian = uang - objCupcakes.harga;
    return beli(kembalian,cheesecakes);
  })
  .then(function(kembalian){
    return beli(kembalian,chocolatecakes);
  })
  .then(function(kembalian){
    return beli(kembalian,rainbowcakes);
  })
  .then(function(kembalian){
    return beli(kembalian,donuts);
  })
  .catch(function(uang){
    return "";
  })
  // .then(function(kembalian){
  //   return buyPromise(rainbowcakes)
  //   .then(function(objRainbowcakes){
  //     kembalian = kembalian - objRainbowcakes.harga;
  //     console.log(kembalian);
  //     return kembalian;
  //   })
  // })
  // .then(function(kembalian){
  //   buyPromise(donuts)
  //   .then(function(objDonuts){
  //     kembalian = kembalian - objDonuts.harga;
  //     return kembalian;
  //   })
  // })
