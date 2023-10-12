import { useState } from "react";
import Square  from "./components/Square";
import { TURNS } from "./logic/constants";
import { checkEndGame, checkWinner} from "./logic/board";
import WinnerModal from "./components/WinnerModal";
import Game from "./components/Game";
import { saveGameLocalStorage } from "./logic/storage/localStorage";

function App () {
  //text constants
  const boardTitle = "Gato encerrado";
  const buttonText = "Empezar el juego";
  
  //States
  const [board, setBoard] = useState(() =>{
    console.log("hola");
    const boardFromtorage = window.localStorage.getItem("board");
    return ( boardFromtorage? JSON.parse(boardFromtorage) : Array(9).fill(null));
  });
  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage? turnFromStorage : TURNS.X
  })
  //null if there is not a winner and false if there is a tie
  const [winner, setWinner] = useState(null);
 
// funtions 
const updateBoard = (index) =>{
  //Check if square was played or there is a winner 
  if(board[index] || winner) return; 

  //always make a copy from useState
  //Save update from board
  const newBoard = [...board];             
  newBoard[index] = turn;
  setBoard(newBoard);

// Change new turn
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);
// funtion to save in local storage 
  saveGameLocalStorage(newBoard, newTurn);

//check if there is a winner
  const newWinner = checkWinner(newBoard);
  if(newWinner){
    setWinner(newWinner);
  }else if(checkEndGame(newBoard)){ //check if game is over
    setWinner(false)
  }
}


//reset all constansts to default
const resetGame = () =>{
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}



  return(
    <>
      <div className="board" >
        <h1>{boardTitle}</h1>
        <button onClick={resetGame}>{buttonText}</button>
          <Game updateBoard={updateBoard} board={board} />
        <section className="turn">
          <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        
        <WinnerModal winner={winner} resetGame={resetGame}/>
        
      </div>
    </>
  );
}

export default App
