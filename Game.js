var PlayerX = 250;
var PlayerY = 250;
var food01 = document.getElementById("food01");
var foodEaten = 0
var timeStart = Date.now()
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

  foodY = Number(document.getElementById("food01").getAttribute("y"))
  foodX = Number(document.getElementById("food01").getAttribute("x"))

  foodY = Number(document.getElementById("food02").getAttribute("y"))
  foodX = Number(document.getElementById("food02").getAttribute("x"))

  if (PlayerX > foodX && PlayerX < foodX + 50 && PlayerY > foodY && PlayerY < foodY + 50) {
      console.log("you did good")
      foodEaten = foodEaten + 1
      document.getElementById("score").textContent = foodEaten

  }

  if (PlayerX > foodX && PlayerX < foodX + 50 && PlayerY > foodY && PlayerY < foodY + 50) {
      console.log("you did good")
      foodEaten = foodEaten + 1
      document.getElementById("score").textContent = foodEaten

  }

  if(foodEaten == 10) {
      document.getElementById("canvas").pauseAnimations()
      var timeStop = Date.now()
      var duration = Math.round((timeStop - timeStart)/1000)+" seconds"
  }


})
