const beli = require('./beli.js');

let buah = [{
  item: 'jeruk',
  harga: 5000,
  waktu: 2000,
},{
  item: 'melon',
  harga: 4000,
  waktu: 2500,
},{
  item: 'pisang',
  harga: 3500,
  waktu: 1000,
},{
  item: 'nanas',
  harga: 3000,
  waktu: 1500,
},{
  item: 'stroberi',
  harga: 2000,
  waktu: 1300,
},{
  item: 'apel',
  harga: 1000,
  waktu: 1800,
}];

beli(18000, buah[0])
  .then(function(kembalian) {
    return beli(kembalian, buah[1]);
  })
  .then(function(kembalian) {
    return beli(kembalian, buah[2]);
  })
  .then(function(kembalian) {
    return beli(kembalian, buah[3]);
  })
  .then(function(kembalian) {
    return beli(kembalian, buah[4]);
  })
  .then(function(kembalian) {
    return beli(kembalian, buah[5]);
  })
  .then(function(kembalian) {
    console.log('Selesai belanja buah');
  })
  .catch(function(kembalian) {
    console.log(`Pulang ke rumah. Sisa uang: ${kembalian}`);
  });

readFilePromise(parentFileName)
    .then(function(parentList) {
      return readFilePromise(childrenFileName);
    })
    .then(function(childrenList) {
      return getChildren(parentList, childrenList);
    })
    .then(function(parentListWithChildren) {
      console.log(parentListWithChildren);
    })
    .catch(function(error) {
      console.log(error);
    });
