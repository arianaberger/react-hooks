import React, { useState } from "react";

const Form = () => {
  const [values, handleChange] = useState({email: '', password: ''});

  return (
    <div className="form">
      <h3>This is a form with it's own custom hook!</h3>
      <h5>Email:</h5>
      <input
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <h5>Password:</h5>
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
