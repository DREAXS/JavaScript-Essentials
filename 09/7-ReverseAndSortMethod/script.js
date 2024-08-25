const names = ["can", "tuba", "elif", "hakan", "osman"];

names.sort();
names.reverse();
// z den a ya dooğru oldu
//console.log(names);

const points = [70, 75, 25, 3, 10, 80, 27];
// points.sort();
//ilk karaktere göre sıralıyor
// points.reverse();

points.sort((a, b) => a - b);
console.log(points);

const students = [
  { name: "alper", point: 100 },
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
];

//   students.sort((a,b) =>{
//       if(a.point >b.point)
//       {
//           return -1;
//       }
//       else if(b.point >a.point)
//       {
//           return 1;
//       }
//       else
//       {
//           return 0;
//       }
//   });
// puana göre önce en yüksek

students.sort((a, b) => b.point - a.point);

console.log(students);
