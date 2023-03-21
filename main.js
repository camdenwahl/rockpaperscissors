function getComputerChoice(){
    var myArray = ["Rock", "Paper", "Scissors"];
    var randomRPS = myArray[Math.floor(Math.random()*myArray.length)];
    return randomRPS
}

function userChoice(){
    var myArray = ["Rock", "Paper", "Scissors"];
    let choice = prompt("Choose rock, paper, or scissors!");
    let lower_choice = choice.toLowerCase();
    let first_letter = choice[0];
    let upper_first = first_letter.toUpperCase();
    let final_word = upper_first + lower_choice.slice(1, );
    let inclusion = myArray.includes(final_word);
    if (inclusion !== true){
        console.log("Please choose one of the available options and try again.");
    } else {
        return final_word;
    }
}

function oneGame(getComputerChoice, userChoice){
    let x = "";
    if (getComputerChoice === "Rock" && userChoice === "Paper"){
        x = ("Player wins!");
    } else if (getComputerChoice === "Paper" && userChoice === "Rock"){
        x = ("Computer wins!");
    } else if (getComputerChoice === "Scissors" && userChoice === "Paper"){
        x = ("Computer wins!");
    } else if (getComputerChoice === "Paper" && userChoice === "Scissors"){
        x = ("Player wins!");
    } else if (getComputerChoice === "Rock" && userChoice === "Scissors"){
        x = ("Computer wins!");
    } else if (getComputerChoice === "Scissors" && userChoice === "Rock"){
        x = ("Player wins!");
    } else {
        x = ("Draw!");
    }
    return x;
}



function game(){
    for (let i = 0; i < 5; i++){
        let oneGameVar = oneGame(getComputerChoice(), userChoice());
        console.log(oneGameVar);
    }
}


finalGame = game();
console.log(finalGame);