let circle = document.querySelector(".circle");
let rock = document.querySelector(".rock");
let rockFive = document.querySelector(".rock-five");
let paper = document.querySelector(".paper");
let paperFive = document.querySelector(".paper-five");
let scissors = document.querySelector(".scissors");
let scissorsFive = document.querySelector(".scissors-five");
let lizard = document.querySelector(".lizard");
let spock = document.querySelector(".spock");
let game = document.querySelector(".game");
let gameBonus = document.querySelector(".bonus-game");
let battle = document.querySelector(".battle");
let hand_one = document.querySelector(".hand-one");
let hand_two = document.querySelector(".hand-two");
let play_again = document.querySelector(".play-again");
let result_text = document.querySelector(".result-text");
let btn = document.querySelector(".play-again-btn");
let score_text = document.querySelector(".score-text");
let rules_btn = document.querySelector(".rules-btn");
let rules = document.querySelector(".rules");
let close_btn = document.querySelector(".close-btn");
let fiveWay = document.querySelector(".five-way");

let handValue;
let hand_two_value;
let score = 0;
score_text.innerHTML = score;
let toggler = true;
let gameToggler = true;

var winWidth = window.matchMedia("(max-width: 475px)")


let loss_btn_color = "hsl(349, 71%, 52%)";
let win_btn_color = "hsl(230, 89%, 62%) ";


fiveWay.addEventListener("click", function () {
    gameToggler ?
        (fiveWay.innerHTML = "3-WAY",
            resetFiveWay(),
            game.style.display = "none", // in case mid-operation toggle takes place-- instead of play again
            rules.style.backgroundImage = "url(images/image-rules-bonus.svg)",
            gameToggler = false) :
        (fiveWay.innerHTML = "5-WAY",
            reset(),
            gameBonus.style.display = "none", // in case mid-operation toggle takes place-- instead of play again
            rules.style.backgroundImage = "url(images/image-rules.svg)",
            gameToggler = true)
})


//play again button -- really badly named :O
btn.addEventListener("click", () => {
    !gameToggler ? resetFiveWay() :
        reset();
})

// rules menu toggle 
rules_btn.addEventListener("click", function () {
    rules.style.display = "block";
})

close_btn.addEventListener("click", function () {
    rules.style.display = "none";
})



// THREE-WAY GAME FUNCTIONS
rock.addEventListener("click", function () {
    handValue = "rock";
    operations(handValue);

});


paper.addEventListener("click", function () {
    handValue = "paper";
    operations(handValue);

});

scissors.addEventListener("click", function () {
    handValue = "scissors"
    operations(handValue);

});

//FIVE-WAY GAME FUNCTIONS

rockFive.addEventListener("click", function () {
    handValue = "rock";
    operationFiveWay(handValue);

});


paperFive.addEventListener("click", function () {
    handValue = "paper";
    operationFiveWay(handValue);

});

scissorsFive.addEventListener("click", function () {
    handValue = "scissors"
    operationFiveWay(handValue);

});

lizard.addEventListener("click", function () {
    handValue = "lizard"
    operationFiveWay(handValue);

});

spock.addEventListener("click", function () {
    handValue = "spock"
    operationFiveWay(handValue);

});



////////THREE- WAY GAME FUNCTIONS 
function operations(handValue) {

    //Game Operations
    let gameArray = ["rock", "paper", "scissors"];
    let player_two = Math.floor(Math.random() * 3);
    hand_two_value = gameArray[player_two];

    //Styles Operations
    game.style.display = "none";
    battle.style.display = "flex";
    // circle.style.backgroundSize = "180px 180px";
    hand_one.classList.add(handValue);

    toggler ?
        setTimeout(() => {
            animation();
            gameDecision();
        }, 1000) : null

    toggler = true; // for testing each frame's css change to false

};


/////////FIVE- WAY GAME FUNCTIONS
function operationFiveWay(handValue) {
    //Game Operations
    let gameArray = ["rock", "paper", "scissors", "lizard", "spock"];
    let player_two = Math.floor(Math.random() * 5);
    hand_two_value = gameArray[player_two];


    //Styles Operations
    gameBonus.style.display = "none";
    battle.style.display = "flex";
    // circle.style.backgroundSize = "180px 180px";
    hand_one.classList.add(handValue);

    toggler ?
        setTimeout(() => {
            animation();
            fiveWayDecision();
        }, 1000) : null

    toggler = true; // for testing each frame's css change to false
}






function animation() {
    winWidth.matches ? null :
        battle.style.width = "90%"; //for responsive regulation
    hand_two.classList.add(hand_two_value);
    hand_two.classList.remove("hand-two-dark");
}


/// THREE WAY GAME RULES
function gameDecision() {

    let result;
    // FOR ROCK
    if (handValue == "rock" && hand_two_value == "scissors") {
        result = "win";
    } else if (handValue == "rock" && hand_two_value == "paper") {
        result = "loss";
    } else if (handValue == "rock" && hand_two_value == "rock") {
        result = "draw";
    } else {

    }



    // FOR PAPER
    if (handValue == "paper" && hand_two_value == "scissors") {
        result = "loss";
    } else if (handValue == "paper" && hand_two_value == "paper") {
        result = "draw";
        console.log("operation 2")

    } else if (handValue == "paper" && hand_two_value == "rock") {
        result = "win";
    } else {

    }



    //FOR SCISSORS
    if (handValue == "scissors" && hand_two_value == "scissors") {
        result = "draw";
        console.log("operation 3")

    } else if (handValue == "scissors" && hand_two_value == "paper") {
        result = "win";
    } else if (handValue == "scissors" && hand_two_value == "rock") {
        result = "loss"
    } else {

    }


    afterDecision(result);
}





// FIVE WAY GAME RULES
function fiveWayDecision() {
    let result;
    // FOR ROCK
    if (handValue == "rock" && hand_two_value == "rock") {
        result = "draw";
    } else if (handValue == "rock" && (hand_two_value == "scissors" || hand_two_value == "lizard")) {
        result = "win";
    } else if (handValue == "rock" && (hand_two_value == "paper" || hand_two_value == "spock")) {
        result = "loss";
    } else {

    }



    // FOR PAPER
    if (handValue == "paper" && hand_two_value == "paper") {
        result = "draw";
    } else if (handValue == "paper" && (hand_two_value == "rock" || hand_two_value == "spock")) {
        result = "win";
    } else if (handValue == "paper" && (hand_two_value == "scissors" || hand_two_value == "lizard")) {
        result = "loss";
    } else {

    }



    //FOR SCISSORS
    if (handValue == "scissors" && hand_two_value == "scissors") {
        result = "draw";
    } else if (handValue == "scissors" && (hand_two_value == "paper" || hand_two_value == "lizard")) {
        result = "win";
    } else if (handValue == "scissors" && (hand_two_value == "rock" || hand_two_value == "spock")) {
        result = "loss"
    } else {

    }



    //FOR LIZARD
    if (handValue == "lizard" && hand_two_value == "lizard") {
        result = "draw";
    } else if (handValue == "lizard" && (hand_two_value == "paper" || hand_two_value == "spock")) {
        result = "win";
    } else if (handValue == "lizard" && (hand_two_value == "rock" || hand_two_value == "scissors")) {
        result = "loss"
    } else {




    }//FOR SPOCK
    if (handValue == "spock" && hand_two_value == "spock") {
        result = "draw";
    } else if (handValue == "spock" && (hand_two_value == "rock" || hand_two_value == "scissors")) {
        result = "win"
    } else if (handValue == "spock" && (hand_two_value == "paper" || hand_two_value == "lizard")) {
        result = "loss";
    } else {

    }



    afterDecision(result);
}






function afterDecision(result) {
    //Styles adjustment to fit displayed element
    play_again.style.display = "block";

    // DISPLAYING RESULT TEXT
    if (result == "win") {
        result_text.innerHTML = "YOU WIN!"
        btn.style.color = win_btn_color;
        score++;
        score_text.innerHTML = score;


    } else if (result == "loss") {
        result_text.innerHTML = "YOU LOSE!"
        btn.style.color = loss_btn_color;
    } else {
        result_text.innerHTML = "YOU DRAW!"
    }
}




function reset() {
    game.style.display = "block";
    battle.style.display = "none";
    // circle.style.backgroundSize = "50px";
    hand_one.classList.remove(handValue);
    hand_two.classList.remove(hand_two_value);
    hand_two.classList.add("hand-two-dark");
    play_again.style.display = "none";
    winWidth.matches ? null :
        battle.style.width = "60%";
}




function resetFiveWay() {
    gameBonus.style.display = "block";
    battle.style.display = "none";
    // circle.style.backgroundSize = "50px";
    hand_one.classList.remove(handValue);
    hand_two.classList.remove(hand_two_value);
    hand_two.classList.add("hand-two-dark");
    play_again.style.display = "none";
    winWidth.matches ? null :
        battle.style.width = "60%";
}