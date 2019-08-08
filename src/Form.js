import React, { useEffect } from "react";
import { useForm } from "./useForm";

const Form = () => {
  const [values, handleChange] = useForm({email: '', password: ''});

  useEffect(() => {
    console.log("DON'T MAKE UR PASSWORD '123' OR ELSE YOU'LL GET HACKED U N00B");
  }, [values.password]);

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
      <p className="secret">Check your console to see a secret message when you enter your password, all thanks to useEffect...</p>

    </div>
  );
};

export default Form;
