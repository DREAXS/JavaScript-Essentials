// Global
let yas = 21;
console.log(yas);

if(true)
{
    // Local
    let yas =60;   
    console.log("İçerideki:",yas);
    if(true)
    {
        let yas =50;
        let ad="Alper";
        var alperTest="Test";
        console.log("İçeridekinin içindeki:",yas,ad,alperTest);
    }
}

console.log("Dışarıdaki:",yas,alperTest);