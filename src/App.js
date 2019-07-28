import './App.css';
import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [count, setCount] = useState(0);

  return(
    <div>
      The count is currently: {count}
    </div>
  );
};

export default App;
