import { useState } from "react";
import Square  from "./components/Square";
import { TURNS } from "./logic/constants";
import { checkEndGame, checkWinner} from "./logic/board";
import WinnerModal from "./components/WinnerModal";
import Game from "./components/Game";

function App () {
  //text constants
  const boardTitle = "Gato encerrado";
  const buttonText = "Empezar el juego";

  //States
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)
  //null if there is not a winner and false if there is a tie
  const [winner, setWinner] = useState(null);
 


// funtions 
const updateBoard = (index) =>{
  if(board[index] || winner) return; 

  //always make a copy from useState
  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);

  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);

  const newWinner = checkWinner(newBoard);
  if(newWinner){
    setWinner(newWinner);
  }else if(checkEndGame(newBoard)){
    setWinner(false)
  }
}

const resetGame = () =>{
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);
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
