document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".pop-up").classList.add("active");
});

document.querySelector(".pop-up .close-btn").addEventListener("click", function(){
    document.querySelector(".pop-up").classList.remove("active")
});