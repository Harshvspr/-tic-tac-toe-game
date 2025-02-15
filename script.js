let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winnerPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame = () => {
  turnO = true;
 count=0;
  enableBoxes();
  msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
  box.addEventListener("click",() =>{
    console.log("box was clicked");
  if(turnO){
    box.innerText = "O";
    turnO = false;
  }else{
    box.innerText = "X"
    turnO = true;
  }
  box.disabled = true;
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


  const disableBoxes = () =>{
 for(let box of boxes){
  box.disabled = true;
 
}
  }

  const enableBoxes = () =>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
   }
     }

  const showWinner = (winner) => {
    msg.innerText = `congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  const checkWinner  = ()=>{
    for(pattern of winnerPattern){
       let post1val = boxes[pattern[0]].innerText;
       let post2val = boxes[pattern[1]].innerText;
       let post3val = boxes[pattern[2]].innerText;

       if(post1val!= "" && post2val!="" && post3val != ""){
        if(post1val === post2val&&post2val === post3val){
          console.log("winnner",post1val);
          showWinner(post1val);
        }
       }

    }
  };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



