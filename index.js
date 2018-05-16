const beli = require('./beli');

class Jajanan {
    constructor(name, harga, waktu) {
        this.item = name
        this.harga = harga
        this.waktu = waktu
    }
}
let kacang = new Jajanan('kacang', 1000, 1000)
let kueCubit = new Jajanan('kue cubit', 1500, 1000)
let gorengan = new Jajanan('gorengan', 2000, 1000)
let lemper = new Jajanan('lemper', 3000, 1000)
let pastel = new Jajanan('pastel', 4000, 1000)

let uang = 12000;
beli(uang, pastel)
    .then(
        function (kembalian) {
            return beli(kembalian, lemper)
        }).then(
            function (kembalian) {
                return beli(kembalian, gorengan)
            }
        ).then(
            function (kembalian) {
                return beli(kembalian, kueCubit)
            }
        ).then(
            function (kembalian) {
                return beli(kembalian, kacang)
            }
        ).then(
            function (kembalian) {
                console.log('belanja selesai')
            }
        )