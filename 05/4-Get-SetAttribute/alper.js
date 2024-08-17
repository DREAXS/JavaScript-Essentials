const link=document.querySelector('a');
console.log(link.getAttribute('href'));
// Bu kod sonucu https://www.gogle.com geliyor
link.setAttribute('href','http://www.boztraining.com');
link.textContent='Boz Training';

const pDegeri=document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
// icerik yerine error olacak
pDegeri.setAttribute('class','error');
pDegeri.setAttribute('style','color:blue');

