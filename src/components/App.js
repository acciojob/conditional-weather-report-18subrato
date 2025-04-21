
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [whether, setWhether] = useState({ temperature: 25, conditions: "Sunny" })

  return (
    <div style={{color:whether.temperature > 20 ? 'red':'blue'}}>
      <p>temperature : {whether.temperature}</p>
      <span>condition : {whether.conditions}</span> 
    </div>
    )
}

export default App
