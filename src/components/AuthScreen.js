import { useState } from "react";
import classes from "./AuthScreen.module.css";
import ATag from "./UI/ATag";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Form from "./Form";

const AuithScreen = () => {
  const [haveAnAcount, setHaveAnAcount] = useState(false);

  const handleSwitch = () => {
    setHaveAnAcount((prev) => !prev);
  };

  return (
    <Card background='#fff' justify='space-around'>
      <div className={classes["screen-auth__head"]}>
        <img src='./img/auth-bg.png' width='20%' />
        <h2 className={classes["screen-auth__head--title"]}>
          {!haveAnAcount ? "Регистрация" : "Авторизация"}
        </h2>
        {!haveAnAcount && (
          <p className={classes["screen-auth__head--description"]}>
            Давай зарегистрируем твою учетную запись и начнем наконец новую
            жизнь!
          </p>
        )}
        {haveAnAcount && (
          <p className={classes["screen-auth__head--description"]}>
            Без тебя тут было так себе. Войди в свою учетную запись и
            погнали!
          </p>
        )}
        <Form haveAnAcount={haveAnAcount} />
      </div>
      <div className={classes["screen-auth__action"]}>
        <Button>{!haveAnAcount ? "Зарегистрироваться" : "Воити"}</Button>
      </div>
      {!haveAnAcount && (
        <p className={classes["screen-auth__footer"]}>
          Уже есть аккаунт?
          <ATag onClick={handleSwitch}>Войти</ATag>
        </p>
      )}
      {haveAnAcount && (
        <p className={classes["screen-auth__footer"]}>
          Еще нет аккаунта?
          <ATag onClick={handleSwitch}>Регистрация</ATag>
        </p>
      )}
    </Card>
  );
};

export default AuithScreen;
