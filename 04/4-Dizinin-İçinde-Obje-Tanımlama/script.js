// const dersler=[
//     {isim:'c',puan:90},
//     {isim:'c++',puan:80},
//     {isim:'c#',puan:85},
// ]


let ogrenci={
    ad:'Alper',
    yas:21,
    email:'abc@mail.com',
    sinif:15,
    dersler:[{isim:'c',puan:90},
             {isim:'c++',puan:80},
             {isim:'c#',puan:85}],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons()
    {
        console.log(this.dersler);
        // console.log(this);
        this.dersler.forEach(ders =>{
            console.log(ders);
        })
    }
};
// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();
