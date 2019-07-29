import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return(
    <div className="app">
      <div className="wrapper">
        <div className="counter">
          The count is currently: {count}
        </div>
        <div className="counter">
          <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
      </div>
    </div>
  );
};

export default App;
