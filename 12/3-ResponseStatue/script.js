const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //  console.log(request, request.readyState);
  
  // //Status Code
  // 100 Continue   : Sunucunun devam etmek için hazırlıklı olduğunu belirtir.
  // 200 OK         : İstek başarılı bir şekilde işlenmiştir.
  // 204 No Content : İstek başarılı bir şekilde işlenmiştir, ancak yanıt gövdesi içeriği yoktur.
  // 404 Not Found  : İstemcinin talep ettiği kaynak sunucuda bulunamamıştır. İlgili URL geçerli bir kaynağa işaret etmiyor olabilir.
  // 500 Internal Server Error : Sunucu tarafındaki bir sorun nedeniyle oluşur.
  
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log('Başarılı cevap alamadık!');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
