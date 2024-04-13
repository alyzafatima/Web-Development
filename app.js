let boxes = document.querySelectorAll('.btn');
let reset = document.querySelector('#reset-btn');
let newgame =document.querySelector('#newgamebtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0=true;
let count = 0;

const gamewin=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [3,4,5],
 [2,4,6],
 [6,4,2],
 [2,5,8],
 [1,4,7],
 [6,7,8]
];
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turn0){
            btn.innerText="O";
            turn0=false;

        }
        else{
            btn.innerText="X";
            turn0=true;
        }
        btn.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
         });
});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const checkWinner = () => {
    for (let pattern of gamewin) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);