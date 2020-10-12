
 let id = ``

function signup(){
    const email=form['email'].value;
    const password=form['password'].value;
    auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
        id=cred.user.uid;
      console.log(cred);
      console.log('id',id);
      M.toast({html: 'signup successfull' ,classes: 'rounded'})
      form.reset();
    }).catch((err)=>{
        M.toast({html: err.message ,classes: 'rounded'})
        form.reset();

    }) 
    }
    
    function signout(){
      auth.signOut().then((res)=>{
        M.toast({html:'Logged out' ,classes: 'rounded'})
        document.getElementById('enteremail').textContent =``;
    localStorage.removeItem('id')
    console.log('id',id);
      });

    }
    
    function loginuser(){
    const form = document.getElementById('loginform');
      const email = form['useremail'].value;
      const password = form['userpassword'].value;
      auth.signInWithEmailAndPassword(email,password).then((res)=>{
        console.log(res.user.email)
    document.getElementById('enteremail').textContent =res.user.email;
        M.toast({html:'Login Successfull!!' ,classes: 'rounded'})
       localStorage.setItem('id',res.user.uid)
   

        form.reset();
        console.log(id);
        const modal = document.querySelector('#login');
        M.Modal.getInstance(modal).close();
   
      }).catch((err)=>{console.log(err.message)
        M.toast({html: err.message ,classes: 'rounded'})
        form.reset();

      }
      );
    }


    function savecardoncloud(){
var html=document.querySelector('.language-html');
var css=document.querySelector('.language-css');
var code={html,css}
savecode('card',code)
    }



    