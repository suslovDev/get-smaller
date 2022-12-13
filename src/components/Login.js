import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { logIn, addUser } from "../store/slices/user-slice";
import { useDispatch } from "react-redux";
import classes from "./AuthScreen.module.css";
import ATag from "./UI/ATag";
import Card from "./UI/Card";
import Form from "./Form";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(logIn(true));
        dispatch(addUser({ id: user.uid, email: user.email }));
        localStorage.setItem("id", user.uid);
        localStorage.setItem("email", user.email);
        localStorage.setItem("isLoggedIn", true);
        navigate("/app");
        // console.log(user.uid);
        // ...
      })
      .catch((error) => {
        console.log("Ошибка!");
      });
  };

  return (
    <Card background='#fff' justify='space-around'>
      <div className={classes["screen-auth__head"]}>
        <img src='./img/auth-bg.png' width='20%' />
        <h2 className={classes["screen-auth__head--title"]}>Авторизация</h2>
        <p className={classes["screen-auth__head--description"]}>
          Без тебя тут было так себе. Войди в свою учетную запись и погнали!
        </p>
        <Form haveAnAcount={true} onSubmit={handleLogin} />
      </div>

      <div className={classes["screen-auth__footer"]}>
        Еще нет аккаунта?
        <Link to='/register'>
          <ATag style={{ textDecoration: "none" }}>Регистрация</ATag>
        </Link>
      </div>
    </Card>
  );
};

export default Login;
