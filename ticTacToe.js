//everytime i click on a box, it'll show a symbol instead of an empty string
const game = new GameBoard();
const winConditions = [[0,1,2], [3,4,5], [6,7,8], [0, 3, 6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function TicTacToeBox (boxNumber){
  this.boxSection = document.querySelector(`#box${boxNumber}`);
  this.choose = "";
  this.boxSection.addEventListener("click", () =>{
    if (this.choose === ""){
      this.choose = game.playerPlaying();
      this.boxSection.textContent = this.choose;
      game.playerTurn++;
      let status = game.checkForWin();
      if(status !== "Nobody Won") {
        alert(status);
        location.reload();
      }
    }
  });
}

function GameBoard(){
  this.gameBoxes =  [];
  this.playerTurn = 1;
  for(let i =1 ; i<=9 ; i++){
    //push adds to end of array
    this.gameBoxes.push(new TicTacToeBox(i));
  }
  this.playerPlaying = () => {return this.playerTurn % 2 === 0 ? 'X' : 'O';}

  this.checkForWin = function(){
  const box1 = document.querySelector("#box1")
  const box2 = document.querySelector("#box2")
  const box3 = document.querySelector("#box3")
  const box4 = document.querySelector("#box4")
  const box5 = document.querySelector("#box5")
  const box6 = document.querySelector("#box6")
  const box7 = document.querySelector("#box7")
  const box8 = document.querySelector("#box8")
  const box9 = document.querySelector("#box9")

  if (box1.textContent === box2.textContent && box2.textContent === box3.textContent && box1.textContent !== ""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box4.textContent === box5.textContent && box5.textContent === box6.textContent && box4.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box7.textContent === box8.textContent && box8.textContent == box9.textContent && box7.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box1.textContent === box4.textContent && box4.textContent === box7.textContent && box1.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box2.textContent === box5.textContent && box5.textContent === box8.textContent && box2.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box3.textContent === box6.textContent && box6.textContent === box9.textContent && box3.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box1.textContent === box5.textContent && box5.textContent === box9.textContent && box1.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  }else if (box3.textContent === box5.textContent && box5.textContent === box7.textContent && box3.textContent !==""){
    return (((this.playerTurn % 2) + 1) + " won")
  } else {
    return "Nobody Won";
  }
}
}
