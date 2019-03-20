var dice = document.getElementById("rollButton");
dice.addEventListener("click", roll, false);

function roll() {
    var randomNumber = Math.floor(Math.random() * Math.floor(6)) + 1; //Generate random number
    document.getElementById("dice").src = "d" + randomNumber + ".png";
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