var dice = document.getElementById("rollButton");
dice.addEventListener("click", rollingAnimation, false);

function roll() {
    var randomNumber = Math.floor(Math.random() * Math.floor(6)) + 1; //Generate random number
    if(randomNumber == 1){
        document.getElementById("dice").src = "d1.png";
    } else if(randomNumber == 2){
        document.getElementById("dice").src = "d2.png";
    } else if(randomNumber == 3){
        document.getElementById("dice").src = "d3.png";
    } else if(randomNumber == 4){
        document.getElementById("dice").src = "d4.png";
    } else if(randomNumber == 5){
        document.getElementById("dice").src = "d5.png";
    } else if(randomNumber == 6){
        document.getElementById("dice").src = "d6.png";
    }
}

function rollingAnimation(){
    document.getElementById("dice").src = "diceRoll.gif";
    setTimeout(roll, 2000);
}