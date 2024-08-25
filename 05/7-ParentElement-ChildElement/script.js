const section =document.querySelector('section');
console.log(section.children);
console.log(Array.from(section.children));


Array.from(section.children).forEach(child =>{

    child.classList.add('section-element');
})

const baslik=document.querySelector('h2');
console.log(baslik.parentElement);//section
console.log(baslik.parentElement.parentElement);//body
console.log(baslik.nextElementSibling);//React
console.log(baslik.previousElementSibling);//Merhaba
console.log(baslik.nextElementSibling.parentElement.children)//section-element

