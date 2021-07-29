import React, { useEffect, useState } from 'react';
import './index.css'


// interface ModeColor {
//   Toggle: boolean
// }

function App() {

  const [color, setColor] = useState(true)

  const changeModeColor = () => {
    setColor(!color)
  }

  useEffect(() => {
    console.log(color)
  }, [color])


  return (
    <>
    {color ? (<div className="w-mode">
      <div className="h1"> Hello world</div>
      <button type="button" onClick={changeModeColor}>Dark Mode</button>
    </div>) : (<div className="d-mode">
      <div className="h1"> Hello world</div>
      <button type="button" onClick={changeModeColor}>Dark Mode</button>
    </div>)
    }

    </>
  );
}

export default App;
