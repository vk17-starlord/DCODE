
var GoogleApiKey='AIzaSyCnJDrGFvtErbvsvrAtj-XbjmPczs7YSQs'




;(async () => {
  const response = await axios({
    url: 'https://www.googleapis.com/webfonts/v1/webfonts?key='+GoogleApiKey,
    method: 'get'
  })

  let data =response.data;
  console.log(data['items'][0])
})()

var CardProps={
Card:{
bg:'#fff',
color:'#000',
img:'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg'
},
Card_Content:{
title:' White Chocolate Dust',
titleColor:'#1b1b1b',
textColor:'#000',
text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem natus voluptatibus ullam a neque consectetur animi eaque tempora ipsum!',
buttonbg:'crimson',
buttonColor:'#fff',
buttonText:'Read More'
}
}


function GetCard(){
var cardbg = document.getElementById('cardbg').value;
var cardcolor = document.getElementById('CardColor').value;
var cardImg = document.getElementById('CardImg').value;
CardProps.Card.bg=cardbg;
CardProps.Card.color=cardcolor;
CardProps.Card.img=cardImg;

cardcode();
cardCss();
updateDom();

console.log(CardProps)
}


function cardcode(){
var Card=`<div class="card ">
<img src="${CardProps.Card.img}" alt="" class="card-image">
<div class="card-content">
<p class='card-title'>${CardProps.Card_Content.title}</p>
<p class='card-text'>${CardProps.Card_Content.text}</p>
<button id='card-btn'>${CardProps.Card_Content.buttonText}</button>
</div> 

</div>`

    var CardHtml =`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto:wght@300&display=swap" rel="stylesheet"> 
  <!-- material css  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>

<body>
<!-- Your Code Goes Here -->
 
   ${Card}


<!-- material -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script>
      M.AutoInit();
  </script>
</body>
</html>
    `;
    
  document.querySelector('.language-html').innerHTML=Prism.highlight(CardHtml, Prism.languages.html);

document.getElementById('card-html-code').innerHTML=Card;


}

function savecontent() {
    var CardTitle = document.getElementById('CardTitle').value;
    var CardTitleColor = document.getElementById('CardTitleColor').value;
    var CardText = document.getElementById('CardText').value;
    var CardTextColor = document.getElementById('CardTextColor').value;
    var ButtonBg = document.getElementById('ButtonBg').value;
    var ButtonColor= document.getElementById('ButtonColor').value;
    CardProps.Card_Content.title=CardTitle;
    CardProps.Card_Content.titleColor=CardTitleColor;
    CardProps.Card_Content.textColor=CardTextColor;
    CardProps.Card_Content.text=CardText;
    CardProps.Card_Content.buttonbg=ButtonBg;
    CardProps.Card_Content.buttonColor=ButtonColor;
    cardcode();
    cardCss();
    updateDom();

}


function cardCss(){
var css =`

.card {
  width: 320px;
  min-height: 420px;
  background-color:${CardProps.Card.bg};
  color: ${CardProps.Card.color};
  margin: 100px auto;
}

.card-image{
  width: 100%;
height: 250px;
}

.card-content {
padding:5px;

}
.card-title{
font-size:24px !important;
color:${CardProps.Card_Content.titleColor};
padding:10px;
}
.card-text{
  font-size:16px !important;
  color:${CardProps.Card_Content.textColor};
  padding:10px;
}
#card-btn{
margin:10px;
padding:8px 15px;
background-color: ${CardProps.Card_Content.buttonbg};
border: none;
color:${CardProps.Card_Content.buttonColor};
box-shadow:2px 4px 8px rgba(220, 20, 60, 0.5);
}




@media screen and (max-width:678px){
  .card{
    width:100%;
    min-height: 420px;
  }
  .card-title{
    font-size:16px !important;
  }
  .card-img{
 height: 200px;
  }
  .card-content{
    font-size:14px;
 padding:10px !important;
   }
   #card-btn{
   margin:0px;
   }
 }

}

`
document.querySelector('.language-css').innerHTML=Prism.highlight(css, Prism.languages.css);
}

function updateDom(){
    var card = document.querySelector('.card');
    var cardContent = document.querySelector('.card-content')
    var cardTitle = document.querySelector('.card-title');
    var CardBtn = document.querySelector('#card-btn');
    var CardText = document.querySelector('.card-text');
// card
console.log(card,cardContent,cardTitle,CardBtn,CardText);

    card.style.backgroundColor = CardProps.Card.bg;
    card.style.color = CardProps.Card.color;
    
// Card Content;
    cardTitle.textContent=CardProps.Card_Content.title;
    cardTitle.style.color = CardProps.Card_Content.titleColor;
    CardText.style.color = CardProps.Card_Content.textColor;
    CardText.textContent=CardProps.Card_Content.text;


    
    // card Button

    CardBtn.style.backgroundColor = CardProps.Card_Content.buttonbg;
    CardBtn.style.color = CardProps.Card_Content.buttonColor;

 
}

cardcode()
cardCss()


