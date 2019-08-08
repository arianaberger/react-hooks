import React from 'react';
import { useFetch } from './useFetch';

const Cat = () => {

  useFetch('http://numbersapi.com/43/trivia')

  return(
    <div className="image">
      <a href="https://giphy.com/gifs/cat-party-hard-rainbow-shit-ZIcOEgfPoRoe4">
        <img src="https://media.giphy.com/media/ZIcOEgfPoRoe4/giphy.gif" width="75%" height="75%" alt="kitteh"/>
      </a>
    </div>
  )
}

export default Cat;
