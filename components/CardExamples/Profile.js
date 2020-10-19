var CardProps={
    Card:{
    bg:'rgb(24, 24, 23)',
    color:'#fff',
    img:'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    Card_Content:{
    title:'Adeoson Abiola',
    titleColor:'aliceblue',
    textColor:'#cccccc',
    text:`Hi i,am Abiola , I'm a UX/UI Branding & ans strategy designer with oer 5 Years of Experience in Helping brands make it hit`,
    buttonbg:'rgba(243, 224, 53, 0.911)',
    buttonColor:'#000',
    buttonText:'Hire Now'
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
    var Card=`
    <div class="card">
  <div class="profile-image" style="background-image: url('${CardProps.Card.img}');"></div>
  <p id="profile-name">${CardProps.Card_Content.title}</p>
  <p class='profile-description'>
   ${CardProps.Card_Content.text}
    </p>
    <button class='profile-btn'> ${CardProps.Card_Content.buttonText}</button>
  </div>
`

        var CardHtml =`
        <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
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
    .card{
  width:320px;
  min-height:520px;
  border-radius: 20px;
padding-top: 20px;
  margin: 100px auto;
  background-color: rgb(24, 24, 23);
  box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.493);
  text-align: center;
}


.profile-image{
  width:200px;
  height: 200px;
  margin: 20px auto;
  box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.829);
  border-radius: 50%;
 
  background-position:center;
  background-size: cover;
}
#profile-name{
  font-size:1.5rem;
  margin:20px auto;
  color:aliceblue;
  font-family: 'Oswald', sans-serif;
  }
  .profile-description{
    text-align:left;
    font-weight: bold;
    color: #cccccc;
    opacity: 0.5;
    padding:0px 20px;
  }

  .profile-btn{
    padding:10px  30px;
    margin:20px auto;
    border-radius: 15px;
    border: none;
    box-shadow: 2px 2px 8px rgba(245, 223, 22, 0.336);
    background-color:rgba(243, 224, 53, 0.911);
    font-family: 'Roboto Slab', serif;
  }
    
    `
    document.querySelector('#CssCode').innerHTML=Prism.highlight(css, Prism.languages.css);
    }
    
    function updateDom(){
        var card = document.querySelector('.card');
       
        var cardTitle = document.querySelector('#profile-name');
        var CardBtn = document.querySelector('.profile-btn');
        var CardText = document.querySelector('.profile-description');
    // card

    
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
    
    