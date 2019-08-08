import React, { useState } from "react";
import { useForm } from "./useForm";

const Form = () => {
  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <div className="form">
      <h3>This is a form with it's own custom hook!</h3>
      Email:
      <input
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      Password:
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
