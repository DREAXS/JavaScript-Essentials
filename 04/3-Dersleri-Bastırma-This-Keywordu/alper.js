let ogrenci={
    ad:'Alper',
    yas:21,
    email:'abc@mail.com',
    sinif:15,
    dersler:['c','c++','c#'],
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
