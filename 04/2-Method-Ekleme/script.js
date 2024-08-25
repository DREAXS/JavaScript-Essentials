let ogrenci={
    ad:'Alper',
    yas:21,
    email:'abc@mail.com',
    sinif:15,
    dersler:['c','c++','c#'],
    // Arrow fonksiyon kullanılamaz
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
};

ogrenci.login();
ogrenci.logout();
