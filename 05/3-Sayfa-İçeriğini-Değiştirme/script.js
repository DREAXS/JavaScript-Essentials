// const pdegeri=document.querySelector('p');
// içindeki text değerini almak için
// console.log(pdegeri.innerText);

// pdegeri.innerText='Developer';

// const pdegeri=document.querySelectorAll('p');

// pdegeri.forEach(a =>{
//     console.log(a.innerText);
//     a.innerText +=' yeni';
// })

const icerik=document.querySelector('.icerik');
console.log(icerik.innerHTML);

// icerik.innerHTML='<h2>Vue JS, React JS, Angular JS</h2>';
icerik.innerHTML+='<h5>Vue JS, React JS, Angular JS</h5>';

const ogrenciler=['alper','can','elif'];
ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML +=`<p>${ogrenci}</p>`
})

