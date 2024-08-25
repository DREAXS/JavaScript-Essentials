const points = [70, 75, 25, 35, 10, 80, 27];
//belirli bir koşulu karşılayan İLK elemanın indeksini bulur

const arrayIndex=points.findIndex(point => point == 35);

// const arr=points.findIndex(pointt =>{
//   return point==50;
// })

points[arrayIndex]=45;
console.log(points);


const students = [
    {name: 'alper', point: 10},
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
         
  ];

 const objectIndex=students.findIndex(student =>student.name == 'elif');
 students[objectIndex].point=80;
 console.log(students);