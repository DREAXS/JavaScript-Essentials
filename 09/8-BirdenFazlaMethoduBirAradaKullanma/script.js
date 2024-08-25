const students = [
    {name: 'alper', point: 50},
    {name: 'can', point: 90},
    {name: 'elif', point: 30},
    {name: 'osman', point: 100}, 
    {name: 'hakan', point: 45}, 
    {name: 'deniz', point: 70},     
  ];
  
  const filtered=students.filter(student => student.point < 50);

  const plusPoint=filtered.map(student =>{
      return `${student.name} adlı öğrencinin yeni notu ${student.point +15}`;
  })

  console.log(plusPoint);

  const newNotes=students.filter(student => student.point < 50)
  .map(student =>`${student.name} adlı öğrencinin yeni notu ${student.point +15}`);

  console.log(newNotes);