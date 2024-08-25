// const a = (callBacka) =>{
//     let yas=40;
//     callBacka(yas);
//   };
//   a(function(value)
//   {
//     console.log(value);
//   })
  

let ogrencilerim=['alper','can','elif','buse'];

ogrencilerim.forEach(function()
{
    console.log("Selam");
    // 4 defa selam yazar
})

ogrencilerim.forEach(function(kisi,index)
{
    console.log(kisi,index);
    // alper 0
    // can   1
    // elif  2
    // buse  3
})

const ogrenci = (kisi,index) =>
{
    console.log(`${index} - ${kisi}`);
}

ogrencilerim.forEach(ogrenci);
// her biri için tek tek çağrılmış oldu