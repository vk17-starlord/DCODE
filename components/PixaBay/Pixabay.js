


const Parameter ={

    search:'flower',
    ImageType:'photo',
    orientation:'all',
    category:'all',
    color:'all',
    order:'popular'

}


// search input
var search = document.getElementById('search')
console.log(search)
search.addEventListener('keyup',()=>{
    console.log(search.value)
    Parameter.search=search.value;
    searchImage(Parameter);
})



if(Parameter.search==='')
{
    Parameter.search='flower';
    searchImage(Parameter)
}else{
    searchImage(Parameter);
}
function searchImage(parameter){
    var ApiKey='18188553-bd699df0baae0c8a039f5e1f5'
;(async () => {
  const response = await axios({
    url: `https://pixabay.com/api/?key=${ApiKey}&q=${parameter.search}&image_type=${parameter.image_type}
    &orientation=${parameter.orientation}&category=${parameter.category}&color=${parameter.color}&order=${parameter.order}`
    
    
    ,
    method: 'get'
  })


  let data =response.data;

showimage(data['hits'])
})()
}


function showimage(array) {

    let input=``

    array.forEach((item)=>{
   
        input +=` 

        <div class='col s12 l4 m6' id='photo'  >
        <img class="materialboxed" src="${item.largeImageURL}"> 
        </div>

        `
     
    })
    document.getElementById('photos').innerHTML=input;
setTimeout(()=>{
        $('.materialboxed').materialbox();
},100)
}


updateradiovalues()

var group1= document.getElementsByName('group1');
group1.forEach((item) => {
 item.addEventListener('change',()=>{
     updateradiovalues();
 })
})


function updateradiovalues(){
    var ele = document.getElementsByName('group1');
   ele.forEach((element)=>{
   if(element.checked){
       console.log(element.value);
       Parameter.orientation=element.value;
       searchImage(Parameter);
   }
   })
} 

var group2= document.getElementsByName('group2');
group2.forEach((element)=>{
    element.addEventListener('change',()=>{
        if(element.checked){
            Parameter.order=element.value;
            searchImage(Parameter)
        }
    })
})