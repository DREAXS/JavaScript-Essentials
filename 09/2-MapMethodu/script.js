const points = [70, 75, 25, 35, 10, 80, 27];
//map metodu her bir elemanı tek başına update edebilir
const newPoints=points.map(point => {
    return point +10;
});
console.log(newPoints);

const students = [
    {name: 'alper', point: 10},
    {name: 'can', point: 40},
    {name: 'tuba', point: 60},
    {name: 'elif', point: 30},
        
  ];

  const newStudentsPoints=students.map(student => {
      if(student.point < 50)
      {
          student.point += +15;
          return student;
        //   return {name :student.name ,point:student.point +15}
        //object 
      }
      else
      {
          return student
      }
  });

  console.log(newStudentsPoints);