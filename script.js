 //getting the values
 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');
 const submit = document.getElementById('button');


 //add an event listener for when the form is submitted

form.addEventListener(submit, function(e){
    e.preventDefault();
    //learn more about prevent default,it prevents the default action of submitting, the result is flashing because it is actually submitting
console.log(username);
});