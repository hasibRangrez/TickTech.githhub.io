

var cross = document.querySelector('.cross');
var bar = document.querySelector('.bar');
var header = document.querySelector('.header')

cross.addEventListener('click',()=>{
    setTimeout(()=>{cross.classList.add('hide');
    bar.classList.toggle('hide');
    header.classList.toggle('header-hide');
},100);
    
    
})

bar.addEventListener('click',()=>{
    setTimeout(()=>{
    bar.classList.add('hide');
    cross.classList.toggle('hide');
    header.classList.toggle('header-hide');
    },100);
})