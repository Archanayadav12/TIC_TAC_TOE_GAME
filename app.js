let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let play = document.querySelector(".playagain");
let winner = document.querySelector(".win");
let msg = document.querySelector(".msg-container");

// 2 player is playing 
// 1-player0; 2-playerX

let player0 = true;

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const newgame = () => {
    player0 = true;
    enablebtn();
    msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(player0){
            box.innerText = "o";
            player0 = false;
        }
        else{
            box.innerText = "x";
            player0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
}); 

const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winn) => {
    winner.innerText = `congratulation winner is ${winn}`;
    msg.classList.remove("hide");
    disablebtn();
};

const checkwinner = () => {
    for(let pattern of winpattern ){
        let val0 = boxes[pattern[0]].innerText;
        let val1 = boxes[pattern[1]].innerText;
        let val2 = boxes[pattern[2]].innerText;
        if(val0 !="" && val1 != "" && val2 != ""){
            if(val0===val1 && val1===val2){
                showWinner(val1);
            }
        }
    }
};

play.addEventListener("click", newgame);
resetbtn.addEventListener("click", newgame);