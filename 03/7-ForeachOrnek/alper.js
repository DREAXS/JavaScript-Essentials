const ulDegisken=document.querySelector('.main');

let ogrencilerim = ['alper', 'can', 'elif', 'buse'];

let html=``;

ogrencilerim.forEach(ogrenci =>{
    html +=`<li>${ogrenci}</li>`
})

console.log(html);

ulDegisken.innerHTML=html;