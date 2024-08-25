
const username='111alper';
const pattern=/^[a-zA-Z0-9]{8,15}$/;
// const pattern2=/^.{8,15}$/;
// Tüm özel ifedeleri büyük küçük harf sayıları kapsar

// let sonuc=pattern.test(username);
// // console.log(sonuc);

// if(sonuc)
// {
//     console.log('Başarılı');

// }
// else
// {
//     console.log('Başarısız');
// }


let sonuc=username.search(pattern);
 console.log(sonuc);