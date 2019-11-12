import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const Cat = () => {

  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const {fact, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count])

  return(
    <div>
      <div className="image">
        <img src="https://media.giphy.com/media/Af7PZHdqlJphm/giphy.gif" width="75%" height="75%" alt="kitteh"/>
      </div>
      <div className="fact-container">
        <h4>Can you teach an old cat a new fact?</h4>
        <div className="fact">
          {loading ? "kiTTeh iz thinking haRd..." : fact}
        </div>
        <div>
          <button onClick={() => setCount(c => c + 1)}>nEw FaCt</button>
        </div>
      </div>
    </div>
  )
}

export default Cat;
