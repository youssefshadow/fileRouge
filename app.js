let toggle=document.querySelector('.toggle');
let body=document.querySelector('body');
// function: lorsque je clique sur le menu burger je crée une classe sur le body
toggle.addEventListener('click',function(){
    body.classList.toggle('open');
})


