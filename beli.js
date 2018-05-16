function beli(uang, obj){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log(`Saya pergi membeli ${obj.item}`)
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian);
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
        reject(uang)
      }
    },obj.waktu)
  })
}

module.exports = beli;
