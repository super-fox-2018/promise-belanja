function beli(uang, food){
  return new Promise(function(resolve, reject) {
    
    console.log(`Saya pergi membeli ${food}`)
    setTimeout(function(){

      var kembalian = uang
      for(let i = 0; i < 5; i++) {
        kembalian -= food[i].harga
      }
      
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${food} uang kembaliannya ${kembalian}`);
        resolve(kembalian);
      } else {
        reject(`uang ga cukup nih buat beli ${food}`);
      }
    }, 1000);
  })
  
}

module.exports = beli;