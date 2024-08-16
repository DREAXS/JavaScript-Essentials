let isimler = ['alper','can','ali','berke'];
console.log(isimler[1]);

isimler[1]='buse';
console.log(isimler[1]);

let  yaslar=[20,21,22];
console.log(yaslar[0]);

let rastgele=['alper','bilgin',21,22];
console.log(rastgele);
console.log(rastgele.length);

let tireliIsimler=isimler.join('-');
console.log(tireliIsimler);

let siraRastgele=rastgele.indexOf('alper');
console.log(siraRastgele);

let ekleYaslar=yaslar.concat([19,18]);
console.log(ekleYaslar);

console.log(isimler);
let elemanEkleIsimler=isimler.push('eylül');
console.log(isimler);
isimler.pop();
console.log(isimler);