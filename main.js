function getComputerChoice(){
    var myArray = ["Rock", "Paper", "Scissors"];
    var randomRPS = myArray[Math.floor(Math.random()*myArray.length)];
    return randomRPS;
}

function checkTotal(scoreUser, scoreComputer){
    if (scoreUser >= 5) {
        winCard = document.createElement('h1');
        winCard.setAttribute('id', 'h1-place');
        let winDiv = document.getElementsByClassName("win")[0];
        winDiv.appendChild(winCard);
        let winNode = document.createTextNode("Player Wins The Match!");
        winDiv.textContent = winNode.textContent;
    }
    else if (scoreComputer >= 5) {
        winCard = document.createElement('h1');
        winCard.setAttribute('id', 'h1-place');
        let winDiv = document.getElementsByClassName("win")[0];
        winDiv.appendChild(winCard);
        let winNode = document.createTextNode("Computer Wins The Match!");
        winDiv.textContent = winNode.textContent;
    }
}

let totalScorePlayer = 0;
let totalScoreComputer = 0;
function tallyGame(gameResult){
    if (totalScoreComputer < 5 && totalScorePlayer < 5){
        if (gameResult === "Player Wins!"){
            playerCard = document.createElement('h4');
            playerCard.setAttribute('id', 'h4-place');
            let scoreDiv = document.getElementsByClassName("score")[0];
            scoreDiv.appendChild(playerCard);
            totalScorePlayer = totalScorePlayer + 1;
            let scoreNode = document.createTextNode(totalScorePlayer + "-" + totalScoreComputer);
            scoreDiv.textContent = scoreNode.textContent;
            }
        else if (gameResult === "Computer Wins!"){
            computerCard = document.createElement('h4');
            computerCard.setAttribute('id', 'h4-place-c');
            let scoreDiv = document.getElementsByClassName("score")[0];
            scoreDiv.appendChild(computerCard);
            totalScoreComputer = totalScoreComputer + 1;
            let scoreNode = document.createTextNode(totalScorePlayer + "-" + totalScoreComputer);
            scoreDiv.textContent = scoreNode.textContent;
            }
        checkTotal(totalScorePlayer, totalScoreComputer);
    }
}

function playRound(choice, computer){
    if (totalScoreComputer < 5 && totalScorePlayer < 5){
        let result = document.getElementById('h3-place');
        let compResult = document.getElementById('h3-place-2');
        if (!result) {
            result = document.createElement('h3');
            compResult = document.createElement('h3');
            result.setAttribute("id", "h3-place");
            compResult.setAttribute("id", "h3-place-2");
            let ele = document.getElementsByClassName("result")[0];
            ele.appendChild(result);
            ele.appendChild(compResult);
            titleCard = document.createElement('h2');
            titleCard.setAttribute("id", "h2-place");
            ele.appendChild(titleCard);
        }    
    
        let contentNode = document.createTextNode(choice);
        let contentNodeComp = document.createTextNode(computer);
        result.textContent = contentNode.textContent;
        compResult.textContent = contentNodeComp.textContent;
    
    
        if (choice === "Rock" && computer === "Paper"){
            var roundWin = "Computer Wins!";
        }
        else if (choice === "Rock" && computer === "Rock"){
            var roundWin = "Draw!";
        }
        else if (choice === "Rock" && computer === "Scissors"){
            var roundWin = "Player Wins!";
        }
        else if (choice === "Paper" && computer === "Scissors"){
            var roundWin = "Computer Wins!";
        }
        else if (choice === "Paper" && computer === "Paper"){
            var roundWin = "Draw!";
        }
        else if (choice === "Paper" && computer === "Rock"){
            var roundWin = "Player Wins!";
        }
        else if (choice === "Scissors" && computer === "Rock"){
            var roundWin = "Computer Wins!";
        }
        else if (choice === "Scissors" && computer === "Scissors"){
            var roundWin = "Draw!";
        }
        else if (choice === "Scissors" && computer === "Paper"){
            var roundWin = "Player Wins!";
        }
        
        let winCompNode = document.createTextNode(roundWin);
        titleCard.textContent = winCompNode.textContent;
    
        tallyGame(roundWin);
    }
 
}

let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click", function() {
        let computerVar = getComputerChoice();
        playRound(button.value, computerVar);

    });
})
