 //getting the values
 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');
 

//functions used in form
//function to check for error in all input messages
const showError = (input, message) => {
const formError = input.parentElement; //formError is the parent element of the input tag which is div
formError.className = 'form-control error'; //the form-control class is added with the new class 'error'  because the initial class of the parent element of input which is <div> is overwritten
const small = formError.querySelector('small');
small.innerText = message;
}

//function when successful
const showSuccess = (input) => {
    const formSuccess = input.parentElement;
    formSuccess.className = 'form-control success';
}
//function to check if email is valid
const checkEmail = (input) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)/*test the value of the input using the regular expression */){
        showSuccess(input);
    } else {
        showError(input,'Email is not valid');
    }
//this regular expression matches email address  
}

//function to get the field name to be used by the small tag
const getFieldName = (input) =>{
    return input.id/*the id of the input*/.charAt(0).toUpperCase()/*this changes the first char to uppercase */ + input.id.slice(1)/*slice first letter of id name  */;
}

//function to check required fields in array
const checkReqField = (inputArray) =>{
    inputArray.forEach(function(input){
        if(input.value === ''){ 
                showError(input, `${getFieldName(input)} is required`);
                //input.id is the id of each input
            } else {
                showSuccess(input);
                }
    });
//     
}

//function to check length of username and password
const checkLength = (input, min, max) =>{
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be lesser than ${max} characters`);
    }else {
        showSuccess(input);
    }
} 
//function to check if passwords match
const checkPasswords = (input1, input2) =>{
    if(input1.value === input2.value){
        showSuccess(input2);
    } else {
        showError(input2, 'The passwords do not match')
    }
}

//EVENT LISTENERS
 //add an event listener that checks through the form inputs for when the form is submitted

form.addEventListener('submit', function(e){
    e.preventDefault();
    //learn more about prevent default,it prevents the default action of submitting, the result is flashing because it is actually submitting

checkReqField([username, email, password, password2]);
//instead of repeating each one, we can pass an array through the function

// if(email.value === ''){
//     showError(email,'Email is required');
// }  else if(!isEmailValid(email.value)){ //the function checks if the value of the email is valid
//     showError(email,'Email is not valid');
// } 
// else {
//     showSuccess(email);
// }

// 
checkLength(username, 6, 10);
checkLength(password, 10, 15);
checkEmail(email);
checkPasswords(password, password2);
});