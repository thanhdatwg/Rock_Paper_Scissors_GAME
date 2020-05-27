let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const img_div = document.getElementsByTagName("img");
console.log(img_div);




function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    console.log("USER WIN");  
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "!! YOU WIN !!";
    result_div.classList.remove("mauvang");
    result_div.classList.remove("mauxanh");
    result_div.classList.add("maudo");
}

function lose() {
    computerScore++;
    console.log("COMPUTER WIN");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "!! COMPUTER WIN !!";
    result_div.classList.remove("mauxanh");
    result_div.classList.remove("maudo");
    result_div.classList.add("mauvang");
}

function draw() {
    console.log("!!DRAWW!!");
    result_div.innerHTML = "!!!! DRAWW !!!!";
    result_div.classList.remove("maudo");
    result_div.classList.remove("mauvang");
    result_div.classList.add("mauxanh");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("User : " + userChoice );
    console.log("Computer : " + computerChoice);
    switch (userChoice +" "+ computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            win();
            break;
        case "scissors rock":
        case "rock paper":
        case "paper scissors":
            lose();
            break;
        case "rock rock":
        case "scissors scissors":
        case "paper paper":
            draw();
            break;
    }
}


function main() {


    rock_div.addEventListener('click',function(){
        game("rock");  
        img_div[0].classList.toggle("xoay")
    })

    paper_div.addEventListener('click',function(){
        game("paper"); 
        img_div[1].classList.toggle("xoay");
    })

    scissors_div.addEventListener('click',function(){
        game("scissors");
        img_div[2].classList.toggle("xoay");
    })
}
main();

