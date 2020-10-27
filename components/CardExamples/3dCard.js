var container = document.querySelector('.container');

var card = document.querySelector('.card');
var shoes = document.querySelector('#shoe');
var title = document.querySelector('#title')
var desc=document.querySelector('#desc');
var sizes = document.querySelector('#sizes')
var btn = document.querySelector('#btn')
console.log(shoes);
container.addEventListener('mousemove',(e) => {
let x = (window.innerWidth/2- e.pageX/25);
let y = (window.innerHeight/2- e.pageY/25);
console.log(x,y);
card.style.transform =`rotateY(${x}deg) rotateX(${y}deg)`;
// popout
title.style.transform="translateZ(150px)"
desc.style.transform="translateZ(150px)"
btn.style.transform="translateZ(150px)"
sizes.style.transform="translateZ(150px)"
shoe.style.transform="translateZ(150px) rotateZ(-320deg)"
console.log(shoes);

})
container.addEventListener('mouseenter',(e)=>{
    card.style.transition=`none`
})

container.addEventListener('mouseleave',(e)=>{
    card.style.transition=`all 0.5s ease`
    console.log('mouseleave')
    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`

})