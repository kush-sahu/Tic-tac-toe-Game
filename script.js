const container = document.querySelector(".contaner");
const boxees = container.children;
function getRandom() {
  let v1 = Math.ceil(0 + Math.random() * 255);
  let v2 = Math.ceil(0 + Math.random() * 255);
  let v3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${v1},${v2},${v3})`;
}
Array.from(boxees).forEach((box) => {
  setInterval(() => {
    box.style.backgroundColor = getRandom();
    box.style.color = getRandom();
    document.querySelector(".tictak").style.color=getRandom();
    document.querySelector("#reset").style.backgroundColor=getRandom();
  }, 1000);
});
document.querySelector(".gameinfo").style.backgroundColor=getRandom();
document.querySelector(".gameinfo").style.color=getRandom();

document.querySelector(".gamecontaner").style.backgroundColor=getRandom();

console.log("TicTacToe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameove = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

//this function is check for the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//function to check for win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[0]].innerText !== "")
    ) {
      document.querySelector(".info").innerText ="💕💕 Congratulation player " + 
        boxtext[e[0]].innerText + " you have won the game 💕💕";
      gameover = true;

      //this is used for image which will play after game is finished
    //   documentFragment.querySelector('.imgbox').getElementsByClassName('img')[0].style.width="200px"
    }
  });
};

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});



//add click listner for reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""

    });
    document.querySelector(".info").innerText = " " ;
})
