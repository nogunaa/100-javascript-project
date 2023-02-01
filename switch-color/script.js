var color = ["#9FE2BF", "#40E0D0","#6495ED", "#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#F0FFFF", "#F5DEB3", "#90EE90", "#F88379", "#FF69B4"]

var i = 0;
document.querySelector("button").addEventListener("click", 
                                                 function(){
  i = i < color.length ? ++i : 0;
  
  
  // if (i < color.length) {
  //   i = ++i;
  // } else {
  //   i = 0;
  // }
  
  console.log("i:", i);
  
  document.querySelector("body").style.background = color[i];
}); 

