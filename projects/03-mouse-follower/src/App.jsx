import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [cursor, setCursor] = useState({ X:0, Y:0 });
  const [enable, setEnable] = useState(false);

  useEffect(() =>{

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setCursor({X:clientX, Y:clientY})
    }

    if(enable){
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    }

  },[enable]);


  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${cursor.X}px,${cursor.Y}px)`
      }}
      />

      <button onClick={() => setEnable(!enable)} >
        {enable? "desactivar": "activar"} efecto
      </button>
     
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
