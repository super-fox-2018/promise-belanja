const beli = require('./beli.js');

var uang = 50000;
var obj1 = {item: 'Shampoo', harga: 10000, waktu: 150};
var obj2 = {item: 'Sabun', harga: 15000, waktu: 200};
var obj3 = {item: 'Pasta Gigi', harga: 13000, waktu: 300};
var obj4 = {item: 'Conditioner', harga: 10000, waktu: 300};
var obj5 = {item: 'Kapas', harga: 9000, waktu: 50};

  beli(uang, obj1, function(kembalian) {
    uang = kembalian;
    beli(uang, obj2, function(kembalian) {
      uang = kembalian;
      beli(uang, obj3, function(kembalian) {
        uang = kembalian;
        beli(uang, obj4, function(kembalian) {
          uang = kembalian;
          beli(uang, obj5, function(kembalian) {
            uang = kembalian;
          });
        });
      });
    });
  });

/*
NOTE
di file beli.js line 9 yg awalnya kembalian cuma &{kembalian}, saya gnti ke ${uang}.
karena kalau kembalian nanti jadinya -xxx sesuai dgn kembalian dikurang harga barang.
klu pakai uang jdinya nge return uang yg terakhir biar lebih make sense aja
*/