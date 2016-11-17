var PlayerX = 250;
var PlayerY = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
        PlayerX -=15;
 document.getElementById("Player").setAttribute("x", PlayerX)

  }
  else if(e.keyCode == 39){
        PlayerX +=15;
 document.getElementById("Player").setAttribute("x", PlayerX)
  }

  else if(e.keyCode == 40){
        PlayerY +=15;
 document.getElementById("Player").setAttribute("y", PlayerY)
  }

  else if(e.keyCode == 38){
        PlayerY -=15;
 document.getElementById("Player").setAttribute("y", PlayerY)
  }
})
