
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [whether, setWhether] = useState({ temperature: 25, conditions: "Sunny" })

  return (
    <div>

     
      <p style={{ color: whether.temperature > 20 ? 'red' : 'blue' }}> <span >{whether.temperature}</span>{whether.conditions}</p>

    </div>)
}

export default App
