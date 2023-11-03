var plus_button = document.getElementById("plus")
var minus_button = document.getElementById("minus")
var multi_button = document.getElementById("mul")
var divide_button = document.getElementById("divide")
var modulus_button = document.getElementById("modulus")

var Number_box1 = document.getElementById("number1")
var Number_box2 = document.getElementById("number2")
var Number_box3 = document.getElementById("number3")

var num1
var num2
var operator_selector
var score=0

// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function Reset_Values(){
    num1 = random_generator()
    num2 = random_generator()
    operator_selector =  Math.floor(Math.random()*5)
}


function random_generator(){
    return Math.floor(Math.random()*101)
}

function Operator_user(selector , num1 , num2){
    if (selector==0){
        return num1+num2
    }else if (selector==1){
        return num1-num2
    }else if (selector==2){
        return num1*num2
    }else if (selector==3){
        return Math.floor((num1/num2))
    }else if (selector==4){
        return num1%num2
    }
}
 
function insert_values(){
    Reset_Values()
    Number_box1.innerText=num1
    Number_box2.innerText=num2
    Number_box3.innerText=Operator_user(operator_selector,num1,num2)
    console.log(score)

}

plus_button.onclick = () =>{
    if (operator_selector==0){
        insert_values()
        score++
        count=20
    }else{
        window.localStorage.setItem("score" , score)
        window.location.href="gameover.html"
    }
}

minus_button.onclick = () =>{
    if (operator_selector==1){
        insert_values()
        score++
        count=20
    }else{
        window.localStorage.setItem("score" , score)
        window.location.href="gameover.html"
    }
}

multi_button.onclick = () =>{
    if (operator_selector==2){
        insert_values()
        score++
        count=20
    }else{
        window.localStorage.setItem("score" , score)
        window.location.href="gameover.html"
    }
}

divide_button.onclick = () =>{
    if (operator_selector==3){
        insert_values()
        score++
        count=20
    }else{
        window.localStorage.setItem("score" , score)
        window.location.href="gameover.html"
    }
}

modulus_button.onclick = () =>{
    if (operator_selector==4){
        insert_values()
        score++
        count=20
    }else{
        window.localStorage.setItem("score" , score)
        window.location.href="gameover.html"
        
    }
}
insert_values()
startCountdown()


// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
time = document.getElementById("timer")
var count=20 
function startCountdown() {
    
    const intervalId = setInterval(function() {
        
      if (count >= 1) {
        time.textContent=count
        count--;
        
      } else {
        clearInterval(intervalId);
        window.localStorage.setItem("score",score)

        window.location.href = "gameover.html"

      }
    }, 1000);
  }