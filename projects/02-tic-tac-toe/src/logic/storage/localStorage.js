export const saveGameLocalStorage = (newBoard, newTurn) =>{
    window.localStorage.setItem("board" ,JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
  }
