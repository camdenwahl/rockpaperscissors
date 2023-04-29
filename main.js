function getComputerChoice(){
    var myArray = ["Rock", "Paper", "Scissors"];
    var randomRPS = myArray[Math.floor(Math.random()*myArray.length)];
    return randomRPS;
}

function playRound(choice, computer){
    let result = document.getElementById('h3-place');
    let compResult = document.getElementById('h3-place-2')
    if (!result) {
        result = document.createElement('h3');
        compResult = document.createElement('h3')
        result.setAttribute("id", "h3-place");
        compResult.setAttribute("id", "h3-place-2")
        let ele = document.getElementsByClassName("result")[0];
        ele.appendChild(result);
        ele.appendChild(compResult);
    }    
    let contentNode = document.createTextNode(choice);
    let contentNodeComp = document.createTextNode(computer);
    result.textContent = contentNode.textContent;
    compResult.textContent = contentNodeComp.textContent;
}

let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click", function() {
        let computerVar = getComputerChoice();
        playRound(button.value, computerVar);

    });
})
