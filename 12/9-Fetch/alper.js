// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
// İlk then bloğunda, fetch çağrısından dönen Promise çözülünce response (yanıt) nesnesini alırsınız.
//   .then((json) => console.log(json));
// İkinci then bloğunda, response.json() metodundan dönen Promise çözüldüğünde JSON verisi (data) alınır.

fetch('example/can.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
