const icerik =document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('alper');
icerik.classList.remove('error');


const pDegeri=document.querySelectorAll('p');
//tüm p değerlerinde error geçiyorsa .error css success geçiyrsa .succes ile css verilecek 
pDegeri.forEach(alp => {
    if(alp.textContent.includes('error'))
    {
        alp.classList.add('error');
    }
    if(alp.textContent.includes('success'))
    {
        alp.classList.add('success');
    }
});