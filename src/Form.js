import React, { useState, useEffect } from "react";

const Form = () => {
  const [values, handleChange] = useState({email: '', password: ''});

  useEffect(() => {
    console.log('render');

    return () => {
      console.log("unmount");
    }
  }, []);


  return (
    <div>
      <input
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>

  );
};

export default Form;
