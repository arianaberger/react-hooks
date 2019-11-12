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

  return(
    <h3 className="welcome">WELCOME!!!</h3>
  )
}

export default Welcome;
