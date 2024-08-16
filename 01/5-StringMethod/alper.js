let adSoyad="Alper Bilgin";
console.log(adSoyad);

let son=adSoyad.lastIndexOf('l');
console.log("l nin en son bulunduğu index: "+son);

let bastanSona=adSoyad.slice(0,3);
console.log("Baştan itibaren 3 index: "+bastanSona);

let bastanSonaSubStr=adSoyad.substring(2,5);
console.log(bastanSonaSubStr);

let yerDegistir=adSoyad.replace('i','ı');
console.log("i yerine ı yazar: "+yerDegistir);