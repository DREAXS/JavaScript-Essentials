const startDate=new Date('09/14/2003 9:45:00');
const now=new Date();
console.log(startDate);

const diff=now.getTime()-startDate.getTime();
//milisaniye cinsinden sonuç döndü
console.log(diff);

const mins=Math.round(diff/1000/60);
const hours=Math.round(mins/60);
const days=Math.round(hours/24);
const years=Math.round(days/365);
console.log(`Ben ${mins} dakika önce doğdum`);
console.log(`Ben ${hours} saat önce doğdum`);
console.log(`Ben ${days} gün önce doğdum`);
console.log(`Ben ${years} yıl önce doğdum`);


const timestamp=1723247278374;
console.log(new Date(timestamp));