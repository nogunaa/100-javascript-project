var inputfield = document.querySelector(".inputfield");
var button = document.querySelector("button");
var message = document.querySelector(".message");

button.addEventListener("click", function(){
    if(inputfield.value == ''){
        alert("Enter the message and hit the submit button.")
    }
    else{
        message.textContent = inputfield.value;
        inputfield.value = '';
    }
});