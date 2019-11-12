import './App.css';
import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const odd = seconds % 2 === 1 ? "green" : "red";
  const even = seconds % 2 === 0 ? "green" : "red";

  return(
    <h3 className="welcome">
      <div className={`${odd}`}>W</div>
      <div className={`${even}`}>E</div>
      <div className={`${odd}`}>L</div>
      <div className={`${even}`}>C</div>
      <div className={`${odd}`}>O</div>
      <div className={`${even}`}>M</div>
      <div className={`${odd}`}>E</div>
      <div className={`${even}`}>!</div>
      <div className={`${odd}`}>!</div>
      <div className={`${even}`}>!</div>
    </h3>
  )
}

export default Welcome;
