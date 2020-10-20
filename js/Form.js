
  M.AutoInit();


function formstyle() {

    var title = document.getElementById('title');
    var bg= document.getElementById('bg');
    var color = document.getElementById('color');

    document.getElementById('form').style.color=color.value;
    document.getElementById('form').style.background=bg.value;
    document.querySelector('.title').textContent =title.value;

    title.value =``;
    bg.value=``;
    color.value=``;

}


function inputform(){
var text=document.getElementById('formtext');
var type=document.getElementById('formtype')

AddInput(type.value, text.value,guid())
text.value=``;
type.value=``;
}

function AddInput(type,text,id=`textinput${Math.floor(Math.random())}`){
    console.log(id)
    const input=`
        <div class="input-field col  l12" >
          <input id="${id}" type="${type}" class="validate center" required >
          <label for="${id}">${text}</label>
        </div>
      `
   const div = document.createElement('div')
   div.classList.add('row');
   div.innerHTML = input;
   document.getElementById('form-inputs').appendChild(div);
   
}


function addCheckbox(){
    var textinput= document.getElementById('checkboxtext').value;
    let text=`
    <label>
      <input id="indeterminate-checkbox" type="checkbox" />
      <span>${textinput}</span>
    </label>
    `
    var p=document.createElement('p');
    p.innerHTML=text
    document.getElementById('form-inputs').appendChild(p);
}


function addpicker(){
const picker = document.getElementById('pickertype');
const type = 'text'

const input = document.createElement('input');
input.type = type;
input.classList.add(`${picker.value}`);
console.log(input)
document.getElementById('form-inputs').appendChild(input);
M.AutoInit()
}


function addtextarea(){
  const text = document.getElementById('textarea_text')
  const textarea=` <div class="input-field col s12">
  <textarea id="${guid()}" class="materialize-textarea"></textarea>
  <label for="${guid()}">${text.value}</label>
</div>`
const div = document.createElement('div');
div.classList.add('row');
div.innerHTML=textarea;
document.getElementById('form-inputs').appendChild(div);

}

let options=[];

function addoptions(){
  const optiontext = document.getElementById('select_option').value;
  const valuetext = document.getElementById('select_value').value;
  options.push({optiontext,valuetext})
  document.getElementById('select_option').value=``;
  document.getElementById('select_value').value=``;
  console.log(options);
}

function addselect(){

  const label = document.getElementById('select_label')
let optstring=``;
  options.forEach((option)=>{
   
   optstring += `

   <option value="${option.valuetext}">${option.optiontext}</option>
   
   `

   })
  const select=`
<select>
${optstring}
</select>
<label>${label.value}</label>
`
var div=document.createElement('div');
div.classList.add('input-field');
div.classList.add('col');
div.classList.add('s12')
div.innerHTML=select; 
document.getElementById('form-inputs').appendChild(div);
M.AutoInit();
console.log(select)
}

function addswitches(){

  const label1=document.getElementById('label1').value;
  const label2=document.getElementById('label2').value;

 let  switches=`
  <label>
    ${label1}
    <input type="checkbox">
    <span class="lever"></span>
    ${label2}
  </label>

  `
  const div = document.createElement('div');
  div.classList.add('switch');
  div.innerHTML=switches;
  document.getElementById('form-inputs').appendChild(div);
M.AutoInit();

}
function changeicon(){
  document.getElementById('changeicon').innerHTML=document.getElementById('iconinput').value;
  

 console.log(  document.getElementById('changeicon').innerHTML );
}

function addbutton(){
  const iconinput = document.getElementById('iconinput').value;
  const btn_text = document.getElementById('btn_text').value;
  const btn_color = document.getElementById('btn_color').value;
  const btn_bg= document.getElementById('btn_bg').value;

  const button =`
  
  <button class="btn waves-effect waves-light" type="submit" name="action" style="background-color:${btn_bg};color:${btn_color}">
    ${btn_text}
    <i class="material-icons right">${iconinput}</i>
  </button>
  
  `
const div = document.createElement('div');
div.innerHTML =button;
document.getElementById('form-inputs').appendChild(div);

}

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

function updatecode(){
  const formhtml= document.getElementById('form-code').innerHTML;
  const html=`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto:wght@300&display=swap" rel="stylesheet"> 
    <!-- material css  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  
  <body>
  <!-- Your Code Goes Here -->
   <div class='container'>
   ${formhtml}
   </div>
  
  
  <!-- material -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        M.AutoInit();
    </script>
  </body>
  </html>`
  
  document.querySelector('.language-html').innerHTML=Prism.highlight(html, Prism.languages.html);
  console.log()
}

