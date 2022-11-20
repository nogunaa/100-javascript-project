let count = 0;

document.querySelector(".decreaseBtn").onclick = function(){
    count-=1;
    document.querySelector(".countLabel").innerHTML = count;
};

document.querySelector(".resetBtn").onclick = function(){
    count=0;
    document.querySelector(".countLabel").innerHTML = count;
};

document.querySelector(".increaseBtn").onclick = function(){
    count+=1;
    document.querySelector(".countLabel").innerHTML = count;
};