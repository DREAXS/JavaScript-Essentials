const points = [71, 65, 25, 35, 10, 80, 97];
// belirli bir koşulu karşılayan İLK elemanı bulmak için kullanılır

const highPoint=points.find(point =>{
    return point>70
});

console.log(highPoint);

