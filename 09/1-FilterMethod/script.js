const points = [70, 75, 25, 35, 10, 80, 27];
//filter metodu elemanları tek tek gezerek uygun durumda olanları yazar
const studentsPased= points.filter(point =>  point > 50)
// const studentsPassed2=points.filter(point2 =>{
//   return point2>=50;
// })
const studentsPassed = [];
// for (let i = 0; i < points.length; i++) {
//     if (points[i] > 50) {
//         studentsPassed.push(points[i]);
//     }
// }
console.log(studentsPassed);


const students = [
   {name: 'alper', passed: true},  
    {name: 'can', passed: true},
    {name: 'tuba', passed: false},
    {name: 'elif', passed: false},
      
  ];

const passingStudents=students.filter(student =>{
    return student.passed
})

console.log(passingStudents);