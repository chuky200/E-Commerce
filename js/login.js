const btn = document.querySelector('#btn');
const listInputs = document.querySelectorAll('input');
const email = document.querySelector('#inputEmail');
const pass = document.querySelector('#inputPassword');
const googleBtn = document.querySelector('#googleBtn');
btn.addEventListener('click', function() {
    if(verificarPass() && verificarEmail()){
       window.location.href ='./index.html';
    }
    else{
     
        showAlertError();
    }
});


function showAlertError(){
    document.getElementById("alert-danger").classList.add("show");
}
function verificarEmail(){
    if(email.value.length < 1){
        return false;
    }
    else{
        return true;
    }
}
function verificarPass(){
    if(pass.value.length < 1 ){
        return false;
    }
    else{
        return true;
    }
}

function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
console.log('Name: ' + profile.getName());
console.log('Image URL: ' + profile.getImageUrl());
console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
googleBtn.addEventListener('click', function(){
    setTimeout(function(){
        window.location.href ='./index.html';
    }, 7000);
   
    });
    

