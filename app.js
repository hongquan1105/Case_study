let boxes = document.querySelectorAll(".box")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn = 1;
let count = 0;

let temp1 = 0;
let temp2 = 0;

let winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

function resetGame (){
    turn = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "X";
            turn = false;
        }
        else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

function gameDraw (){
    alert("Game draw");
    msg.innerText = `Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

function disableBoxes (){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enableBoxes (){
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner (winner) {
    alert(winner + " is the winner!")
    msg.innerText = winner + " player won";
    msgContainer.classList.remove("hide");
    disableBoxes();
    if (winner === "X"){
        temp1 += 1;
    }
    else if (winner === "X"){
        temp2 += 1;
    }
}

function checkWinner() {
    for(let pattern of winner){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return 1;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);