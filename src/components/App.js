
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [whether, setWhether] = useState({ temperature: 25, conditions: "Sunny" })

  return (
    <div>
      <p><span style={{color:whether.temperature > 20 ? 'red':'blue'}}>Temperature</span>: {whether.temperature}</p>
      <p>Condition : {whether.conditions}</p> 
    </div>
    )
}

export default App
