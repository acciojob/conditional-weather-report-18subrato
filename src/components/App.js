
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [whether, setWhether] = useState({ temperature: 25, conditions: "Sunny" })

  return (
    <div>

      <li style={{ color: whether.temperature > 20 ? 'red' : 'blue' }}>{whether.temperature}</li>
      <li>{whether.conditions}</li>

    </div>)
}

export default App
