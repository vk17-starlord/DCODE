


// dropdownProps

let dropdown={
   bg:'royalblue',
   color:'#fff',
  text: 'Dropdown' ,
  id: 'dropdown1',
  links:[],
  currencode: ``
}


function updatemobile(){
  let links = document.getElementById('links').innerHTML;
document.getElementById('mobile-demo').innerHTML=links;
console.log(document.getElementById('mobile-demo').innerHTML)
M.AutoInit();
}


updatecode();




function adddroplinks() { 
var name = document.getElementById('dropdown_name').value;
var link=document.getElementById('Dropdown_link').value;
var href=document.getElementById('dropdown_href').value;
var bg=document.getElementById('')
dropdown.text=name;
dropdown.id=name;
dropdown.links.push({link,href});
console.log(dropdown)
getdropdowncode(dropdown);
document.getElementById('Dropdown_link').value=``;
document.getElementById('dropdown_href').value=``;
if(dropdown.links.length===1){
alert(` ${dropdown.links.length}st link has been added to the dropdown ....go on and add more links~!!` )
}
updatecode();
updatemobile()
}


 function getdropdowncode(dropdown){
  
  let linkcode=``

  dropdown.links.forEach((link)=>{
    linkcode += ` <li><a href="${link.href}">${link.link}</a></li>`
  })

  console.log(linkcode)
  code=`
  <a class='dropdown-trigger btn' href='#' data-target='${dropdown.id}'   style='background-color: ${dropdown.bg};color:${dropdown.color}'>${dropdown.text}</a>
  <!-- Dropdown Structure -->
  <ul id='${dropdown.id}' class='dropdown-content'>
  ${linkcode}
  </ul>
        
  `
dropdown.currencode=code;
updatecode();
updatemobile()
 }




 function addDropdown(code=dropdown.currencode){
  let links= document.getElementById('links')
  let span = document.createElement('span');
  span.innerHTML=code;
  links.appendChild(span)
  mobilecode.dropdowns.push(span);
  M.AutoInit();
  updatecode();
  updatemobile()
}



function changelogo(){
  var url =document.getElementById('logoinput').value;
 
  document.querySelector('.brand-logo').src=url;
  console.log(url)
  console.log( document.querySelector('.brand-logo'))
  updatecode();

}



function addlinkbutton (){
var linktext = document.getElementById('linktext').value;
var linkhref = document.getElementById('linkhref').value;
var linkbg= document.getElementById('linkbg').value;
var linkcolor= document.getElementById('linkcolor').value;
var a = document.createElement('a');
a.className='waves-effect waves-teal btn-flat';
a.href=linkhref;
a.textContent=linktext;
a.style.backgroundColor=linkbg;
a.style.color=linkcolor;
let links= document.getElementById('links')
links.appendChild(a);
mobilecode.links.push(a);

updatecode();
updatemobile()
  M.AutoInit();
}


function updatecode(){
  var navhtml=document.querySelector('.nav-code').innerHTML;
var html=`
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
   
     ${navhtml}
  
  
  <!-- material -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        M.AutoInit();
    </script>
  </body>
  </html>`
  updatemobile()
  document.querySelector('.language-html').innerHTML=Prism.highlight(html, Prism.languages.html);
 
}
