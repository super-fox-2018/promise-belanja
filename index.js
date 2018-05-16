let beli = require('./beli.js')

let obj  = 
{
	item : 'kucing',
	harga: 12000
}

beli(50000,obj)
	.then(kembalian=>{
		return kembalian;
	})
	.then(kembalian=>{
		return beli(kembalian,obj)
	})
	.then(kembalian=>{
		return beli(kembalian,obj)
	})
	.then(kembalian=>{
		return beli(kembalian,obj)
	})
	.then(kembalian=>{
		return beli(kembalian,obj)
	})
	.catch(err=>{
		console.log(err)
	})