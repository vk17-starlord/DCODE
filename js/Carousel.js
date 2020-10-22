const imageurls=[]

function addimage(){
   var url= document.getElementById('imageinput').value;
   imageurls.push(url);
   updateimagehtml()
document.getElementById('imageinput').value=``;
}

function updateimagehtml(){
    let imagehtml='';
 imageurls.forEach((item,index) => {
console.log(item);
imagehtml += `
<a class="carousel-item" href="#"><img src="${item}"></a>
`

})


const divcarousel=`

<div class="carousel">
${imagehtml}
</div>
`
document.getElementById('html-code').innerHTML=divcarousel;
M.AutoInit();
}