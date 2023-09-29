import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O"  
}



const Square = ({children, index, updateBoard, isSelected}) => {
  const handleClickSquare = () => {
    updateBoard
  }
  const className = `square ${isSelected ? ` is-selected` : ``} `;
  return(
    <>
      <div className={className} onClick={handleClickSquare}>
        {children}
      </div>
    </>
  )
}



function App () {

  const [board, setBoard] = useState(Array(9).fill());
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = () =>{
  
  }

  
  return(
    <>
      <div className="board" >
        <h1>Gato encerrado</h1>
        <section className="game">
          {
            board.map((_, index) =>{
              return(
                <Square
                key={index}
                index={index}
                updateBoard = {updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
        <Square isSelected = {turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected = {turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        
      </div>
    </>
  );
}

export default App
