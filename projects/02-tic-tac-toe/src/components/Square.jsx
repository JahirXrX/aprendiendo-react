export default function Square({children, index, updateBoard, isSelected}){
    const handleClickSquare = () => {
      updateBoard(index);
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