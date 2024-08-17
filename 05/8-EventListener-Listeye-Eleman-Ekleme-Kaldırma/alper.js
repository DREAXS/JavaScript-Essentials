// const button=document.querySelector('button');

// button.addEventListener('click',() =>{
//     console.log('Tıklandı');
// })

const liElemanlari=document.querySelectorAll('li');

liElemanlari.forEach(eleman => {

    eleman.addEventListener('click',e=>{
        // console.log(e);
        // console.log(e.target);//<li>React</li>
        // console.log('Liye tıklandı');
        // e.target.style.color='blue';
    })
})


const ul=document.querySelector('ul');
// ul.remove();
//Komple silindi


liElemanlari.forEach(eleman => {

    eleman.addEventListener('click',e=>{
        e.target.remove();
    })
})

const button=document.querySelector('button');
button.addEventListener('click',() =>{
   const li=document.createElement('li');
   li.textContent='Javascript';

//    ul.append(li);
//Sona ekleme
   ul.prepend(li);
   //Başına ekleme

})