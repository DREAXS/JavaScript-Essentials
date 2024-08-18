const now=new Date();
console.log(now);
//Sat Aug 10 2024 02:40:53 GMT+0300 (GMT+03:00)
console.log(typeof now);
//object

console.log('Year:',now.getFullYear());         //2024
console.log('Month:',now.getMonth()+1);        //8
console.log('Date:',now.getDate());           //10
console.log('Day:',now.getDay());            //6
console.log('Hours:',now.getHours());       //2
console.log('Minutes:',now.getMinutes());  //40
console.log('Seconds:',now.getSeconds()); //53
console.log('timestamp:',now.getTime()); // 1 Ocak 970 ten itibaren günümüze kadar geçen milisaniye
console.log(now.toDateString());        //Sat Aug 10 2024
console.log(now.toTimeString());       //02:40:53 GMT+0300 (GMT+03:00)
console.log(now.toLocaleString());    //10.08.2024 02:40:53