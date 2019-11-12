import './App.css';
import React, { useState } from "react";
import Welcome from './Welcome';
import Form from './Form';
import Cat from './Cat';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return(
    <div className="app">
      <Welcome />
      <div className="wrapper">
        <div className="use-state">
          <h2>If you've been GOOD this is how many presents you'll receive: {count1}</h2>
          <h2>If you've been BAD this is how many presents you'll receive: {count2}</h2>
        </div>
        <button
          onClick={() =>
            setCount1(c => (c + 1))
          }
        >
          Click me!
        </button>
        <button
          onClick={() =>
            setCount2(c => (c - 1))
          }
        >
          Click me!
        </button>

        <Form />
        <Cat />

      </div>
    </div>
  );
};

export default App;
