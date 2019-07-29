import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [{count1, count2}, setCount] = useState({count1: 10, count2: 20});

  return(
    <div className="app">
      <h3 className="cursive">Let's learn some React hooks</h3>
      <div className="wrapper">
          <h2>The first count is currently: {count1}</h2>
          <h2>The second count will stay at: {count2}</h2>
          <button
            onClick={() =>
              setCount(currentState => ({
                ...currentState,
                count1: currentState.count1 + 1
              }))
            }
          >
            Click me!
          </button>
      </div>
    </div>
  );
};

export default App;
