const request = new XMLHttpRequest();

// MLHttpRequest nesnesinin readyState özelliği
// 0 - UNSENT (Gönderilmedi)
// 1 - OPENED (Açık)
// 2 - HEADERS_RECEIVED (Başlıklar Alındı)
// 3 - LOADING (İndiriliyor)
// 4 - DONE (Tamamlandı)

request.addEventListener('readystatechange', () => {
  //  console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
    //sonuc JSON yapısında
  }
});

//db mantığı açma ve gönderme işlemi 
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
