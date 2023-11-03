// Iteration 8: Making scoreboard functional
var scoreboard = document.getElementById("score-box")
a=window.localStorage.getItem("score")

scoreboard.innerText=`Score: ${a}`

