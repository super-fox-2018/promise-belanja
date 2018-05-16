const beli = require('./beli.js')

class Barang {
	constructor(item,harga,waktu){
		this.item = item
		this.harga = harga
		this.waktu = waktu
	}
}

var permen = new Barang("permen",2000,2);
var sepatu = new Barang("sepatu",5000,2);
var buku = new Barang("buku",7000,2);
var pensil = new Barang("pensil",9000,2);
var ciki = new Barang("ciki",80000,2);



beli(50000,permen)
.then( kembalian => {
	return kembalian})
.then(kembalian => {
	return beli(kembalian,sepatu)})
.then(kembalian => {
	return beli(kembalian,buku)})
.then(kembalian => {
	return beli(kembalian,pensil)})
.then(kembalian => {
	return beli(kembalian,ciki)})
.catch(err =>{
	console.log(err) 
})


