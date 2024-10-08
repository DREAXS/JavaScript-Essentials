const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();
    //Sayfa yenilenmemesi için 
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswers[index])
        {
            score +=25;
        }
    })

    result.classList.remove('d-none');
    let puan=0;
    //Interval yüklenme aşaması 
    const bastir= setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;
        if(puan == score)
        {
            clearInterval(bastir);
            //Sonsuz döngüden çıkmak için
        }
        else
        {
            puan++;
        }
    }, 10);
    //10 yerine 1000 olursa 1 sn de yüklenir
})

// setTimeout(()=>{
//     console.log('Can');
// },2000);
// setInterval(() => {
//     console.log('Can');
// }, 1000);
// let i=0;
// const bastir= setInterval(() => {
//     console.log('Can');
//     i++;
//     if(i == 4)
//     {
//         clearInterval(bastir);
//     }
// }, 1000);
