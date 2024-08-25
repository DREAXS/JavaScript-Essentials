console.log("Merhaba");
console.log('Hoş geldiniz');
// Hem çift hem tek tırnak ile kullanılabilir.

let email="abc@email.com";
console.log(email);

//Birleştirme
let ad="Alper";
let soyad="Bilgin";
let adSoyad=ad+" "+soyad;
console.log(adSoyad);

//String Karakterleri Çekme
console.log(adSoyad[0]);
//String Kaç Karakter
console.log(adSoyad.length);
// Tüm harfleri büyük yapma
console.log(adSoyad.toUpperCase());
console.log(adSoyad);
//Tüm harfleri küçük yapma
let kucukAdSoyad=adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);
// Kacıncı Karakter
let harf="b";
let index=kucukAdSoyad.indexOf(harf);
console.log(harf+" ' nin bulunduğu index: "+index);
