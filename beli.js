function beli(uang, obj) {
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log("======")
        //console.log(`uang gk cukup nih buat beli ${obj.item}`);
        reject(`uang gk cukup nih buat beli ${obj.item}`)
      }
    }, obj.waktu);
  })
}





module.exports = beli;
