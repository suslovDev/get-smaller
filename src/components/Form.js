import { useRef } from "react";
import classes from "./Form.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";

const Form = ({ haveAnAcount, onSubmit }) => {
  const emailRef = useRef();
  const telRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
      <Input type='email' placeholder='Enter your Email' ref={emailRef} />
      <Input type='password' placeholder='Password' ref={passwordRef} />
      <Button type='submit'>{`${
        !haveAnAcount ? "Зарегистрироваться" : "Войти"
      }`}</Button>
    </form>
  );
};

export default Form;
