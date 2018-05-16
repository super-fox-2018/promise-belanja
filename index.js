const beli = require('./beli.js')

let susu = {item:'Indomilek',harga:15000,waktu:3000}
let oatmeal = {item:'Havermut',harga:35000,waktu:5000}
let sereal = {item:'Koko Kranceh',harga:20000,waktu:2500}
let miInstan = {item:'Indo emi', harga:2500, waktu:1700}
let mentega = {item:'Bluben',harga:30000,waktu:2500}

beli(150000,susu)
.then(function(kembalian){
   return beli(kembalian,oatmeal)
   .then(function(kembalian){
       return kembalian
   })
})
.then(function(kembalian){
    return beli(kembalian,sereal)
    .then(function(kembalian1){
        return kembalian1
    })
})
.then(function(kembalian){
    return beli(kembalian,miInstan)
    .then(function(kembalian1){
        return kembalian1
    })
})
.then(function(kembalian){
    return beli(kembalian,mentega)
    .then(function(kembalian1){
        return kembalian1
    })
})