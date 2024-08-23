localStorage.setItem('name', 'Alper');
localStorage.setItem('age', 21);

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad, yas);

//localStorage.removeItem('name');
//sadece name i siler

localStorage.clear();
//her şeyi siler

ad = localStorage.getItem('name');
yas = localStorage.getItem('age');
console.log(ad, yas);
