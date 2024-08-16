const yas =21;

if(yas > 18)
{
    // console.log("18 yaşından büyüktür");
}

const adSoyad = ['alper', 'can', 'elif'];

if(adSoyad.length > 5)
{
    console.log("İşte benim tanıdıklarım");
}

const sifre="javascript";

if(sifre.length >=8)
{
    // console.log("Şifre yeterince uzun");
}
else
{
    // console.log("Şifreyi yeniden giriniz");
}

const yeniSifre="javascript";
if(yeniSifre.length >=12)
{
    console.log("Şifre güçlü");
}
else if(yeniSifre.length >=8)
{
    console.log("Şifre yeterli");
}
else
{
    console.log("Şifreyi yeniden giriniz");
}
