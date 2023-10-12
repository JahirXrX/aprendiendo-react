import Square from "./Square";
export default function WinnerModal({winner, resetGame}){

    if(winner === null) return null;

    //Local constants
    const winnerText = winner === false? "Empate": "Gano: ";
    const buttonText = "Empezar de nuevo";

    return(
        <section className="winner">
          <div className="text">
            <h2>
                {winnerText}
            </h2>
            <header className="win" >
              {winner && <Square>{winner}</Square>}
            </header>
            <button onClick={resetGame} >{buttonText}</button>
          </div>
        </section>
    )
}