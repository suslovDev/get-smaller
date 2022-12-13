import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { removeUser } from "../store/slices/user-slice";
import { useDispatch } from "react-redux";

import classes from "./StartScreen.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const StartScreen = ({ isLoggedIn }) => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const [path, setPath] = useState(null);
  const navigate = useNavigate();

  const handleSetPath = () => {
    setPath(isLoggedIn ? "/app" : "/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("isLoggedIn");
    dispatch(removeUser());
    auth.signOut();
  };

  useEffect(() => {
    if (!path) return;
    navigate(path);
  }, [path]);

  return (
    <Card background='#31D6D6' justify='space-between'>
      <div className={classes["screen-up"]}></div>
      <div className={classes["screen-down"]}>
        <h1 className={classes["screen-down__title"]}>Go худеть!</h1>
        <p className={classes["screen-down__description"]}>
          Мы - это то, что мы едим, но то, что мы едим, частенько делает нас
          больше чем мы хотим...
          <span className={classes["ej"]}>&#128022;&#129325;</span>
        </p>
        <Button onClick={handleSetPath}>За дело!</Button>
        {isLoggedIn && (
          <Button onClick={handleLogOut} className={classes["log-out"]}>
            Выйти
          </Button>
        )}
      </div>
    </Card>
  );
};

export default StartScreen;
