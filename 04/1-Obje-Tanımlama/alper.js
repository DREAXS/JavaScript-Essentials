let ogrenci={
    ad:'Alper',
    yas:21,
    email:'abc@mail.com',
    sinif:15,
    dersler:['c','c++','c#']
};

console.log(ogrenci);
//Object
console.log(ogrenci.yas);

ogrenci.yas=20;
console.log(ogrenci.yas);
console.log(ogrenci['ad']);
ogrenci['ad']='Can';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);

