var choices = ["rock","paper","scissors"];
var i = Math.floor(Math.random() * choices.length);
var computerChoice = choices[i];
var playerPoints = 0;
var computerPoints = 0;

var allgame = document.getElementById("game");
var score = document.getElementById("score");
var playersChoices = document.getElementById("playersChoices");
var playerObject = document.getElementById("playerObject");
var computerObject = document.getElementById("computerObject");
var message = document.getElementById("message");
var card = document.getElementById("card");
var repeat = document.getElementById("repeat");
var repeatgame = document.getElementById("repeatgame");

//Update Score every 0.05 sec
setInterval(function(){
    score.innerText = `${playerPoints} - ${computerPoints}`;
},50); 

//Update computer choice every 1 sec
setInterval(function(){
    i = Math.floor(Math.random() * choices.length);
    computerChoice = choices[i];
},1000);

function game(userChoice){
    playersChoices.style.display = "flex";
    playerObject.innerHTML = converted(userChoice);
    computerObject.innerHTML = converted(computerChoice);

    if(userChoice === computerChoice)
    {
       fair();
       endGame();
    }
    else
    {
       if(userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper")
       {
            win();
            endGame();
       }
       else{
            lose();
            endGame();
       }
    }
}
function converted(choice){
    if(choice === "rock"){
        return "<i class='far fa-hand-rock fs-1 text-danger'></i>";
    }
    else if(choice === "paper"){
        return "<i class='far fa-hand-paper fs-1 text-danger'></i>";
    }
    else if(choice === "scissors"){
        return "<i class='far fa-hand-scissors fs-1 text-danger'></i>";
    }
}

function win(){
    var winMessages = ["Winner Winner Chicken Dinner!!","Awesome!","Congratulations!!","You are Lukky Today!"];
    var win = Math.floor(Math.random() * winMessages.length);
    message.innerText = winMessages[win];
    message.style.color = "white";
    message.style.textAlign = "center"
    card.style.background = "rgb(73, 192, 71)";
    playerPoints++;
}
function lose(){
    var loseMessages = ["Loser!!","Loser,Try Again!","Big Loser!!","You are not Lukky Today!"];
    var lose = Math.floor(Math.random() * loseMessages.length);
    message.innerText = loseMessages[lose];
    message.style.color = "white";
    message.style.textAlign = "center";
    card.style.background = "red";
    computerPoints++;
    console.log(computerPoints);
}
function fair(){
    var fairMessages = ["Fair!","Same,Try Again"];
    var fair = Math.floor(Math.random() * fairMessages.length);
    message.innerText = fairMessages[fair];
    message.style.color = "white";
    message.style.textAlign = "center"
    card.style.background = "white";
}

function endGame(){
    if(playerPoints === 5 && computerPoints === 5){

        allgame.style.display = "none";

        playersChoices.innerHTML = "<h2>Game Finished, Try Again</h2>";
        playersChoices.style.padding = "3%";
        playersChoices.style.width = "50%";
        playersChoices.style.marginLeft = "25%";
        playersChoices.style.marginTop = "8%";
        playersChoices.style.borderRadius = "15px";
        playersChoices.style.textAlign = "center";
        playersChoices.style.color = "white";
        playersChoices.style.background = "rgb(73, 192, 71)";

        repeat.style.display = "block";

    }
    else if(playerPoints === 5 && computerPoints < 5){

        allgame.style.display = "none";

        playersChoices.innerHTML = "<h2>Congratulations, You are Winner!</h2>";
        playersChoices.style.padding = "3%";
        playersChoices.style.width = "50%";
        playersChoices.style.marginLeft = "25%";
        playersChoices.style.marginTop = "8%";
        playersChoices.style.borderRadius = "15px";
        playersChoices.style.textAlign = "center";
        playersChoices.style.color = "white";
        playersChoices.style.background = "rgb(73, 192, 71)";

        repeat.style.display = "block";

    }else if((playerPoints < 5 && computerPoints === 5)){

        allgame.style.display = "none";

        playersChoices.innerHTML = "<h2>Game Over</h2>";
        playersChoices.style.padding = "3%";
        playersChoices.style.width = "50%";
        playersChoices.style.marginLeft = "25%";
        playersChoices.style.marginTop = "8%";
        playersChoices.style.borderRadius = "15px";
        playersChoices.style.textAlign = "center";
        playersChoices.style.color = "white";
        playersChoices.style.background = "red";

        repeat.style.display = "block";

    }
}

//play Again
repeatgame.addEventListener('click',function(){
    location.reload(true)});



     
