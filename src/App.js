import './App.css';
import React, { useEffect } from "react";
import Form from './Form';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return(
    <div className="app">
      <h3 className="cursive">Let's learn some React hooks!</h3>
      <div className="wrapper">
        <div className="use-state">
          <h2>The first count is currently: {count1}</h2>
          <h2>The second count is currently: {count2}</h2>
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
        <div className="image">
          <a href="https://giphy.com/gifs/cat-party-hard-rainbow-shit-ZIcOEgfPoRoe4">
            <img src="https://media.giphy.com/media/ZIcOEgfPoRoe4/giphy.gif" width="480" height="342" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;
