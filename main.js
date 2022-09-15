const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email = document.getElementsByTagName('input')[0].value;
    const password = document.getElementsByTagName('input')[0].value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(regex)) {
        document.body.innerHTML += "form submited!" 
        const data = {
            email,
            password
        };
        const JsonData =JSON.stringify(data);
        fetch("https://reqres.in/api/login", {
            method:"POST",
            body:JsonData,
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
     else 
      document.body.innerHTML += "email is invalid";
  
    
});


