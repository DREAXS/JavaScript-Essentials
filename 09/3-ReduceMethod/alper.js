const points = [70, 75, 25, 35, 10, 80, 27];
//bir diziyi tek bir değere dönüştürmek için kullanılan bir dizi metodu

const result=points.reduce((value,point) =>{
if(point >50)
{
    value++;
}
return value;
},0);
//0 value değeri 

console.log(result);


const students = [
    {name: 'alper', point: 40},
    {name: 'can', point: 60},
    {name: 'elif', point: 30},
    {name: 'osman', point: 100},
    {name: 'alper', point: 80},
    {name: 'can', point: 30},
    {name: 'elif', point: 60},
    {name: 'osman', point: 40},
    
  ];
  const canTotal=students.reduce((value,student)=>{
    if(student.name =="alper")
    {
        value+=student.point;
    }
    return value;
  },0)

  console.log(canTotal);