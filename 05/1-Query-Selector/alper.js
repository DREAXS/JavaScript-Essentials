// ilk p etiketini seçer
// const hata=document.querySelector('p');
// class için . id için # işareti
// const hata=document.querySelector('.error');
// const hata=document.querySelector('div.error');
// console.log(hata);

const hatalar=document.querySelectorAll('p');
console.log(hatalar);
console.log(hatalar[1]);

hatalar.forEach(hata =>{
    console.log(hata);
})

// for (let i =0;i<hatalar.length;i++){
//     console.log(hatalar[i]);
// }
