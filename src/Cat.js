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
        <a href="https://giphy.com/gifs/cat-party-hard-rainbow-shit-ZIcOEgfPoRoe4">
          <img src="https://media.giphy.com/media/ZIcOEgfPoRoe4/giphy.gif" width="75%" height="75%" alt="kitteh"/>
        </a>
      </div>
      <div className="fact">
        <h4>Can you teach an old cat a new fact?</h4>
        {loading ? "kiTTeh iz thinking haRd..." : fact}
      </div>
      <button onClick={() => setCount(c => c + 1)}>nEw FaCt</button>
    </div>
  )
}

export default Cat;
