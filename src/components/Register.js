import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, logIn } from "../store/slices/user-slice";
import classes from "./AuthScreen.module.css";
import ATag from "./UI/ATag";
import Card from "./UI/Card";
import Form from "./Form";

const Register = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const auth = getAuth();
  const handleRegister = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        dispatch(logIn(true));
        dispatch(addUser({ email: user.email, id: user.uid }));
        onSuccess();
        // ...
      })
      .catch((error) => {
        console.log("Ошибка!");
        // ..
      });
  };
  return (
    <Card background='#fff' justify='space-around'>
      <div className={classes["screen-auth__head"]}>
        <img src='./img/auth-bg.png' width='20%' />
        <h2 className={classes["screen-auth__head--title"]}>Регистрация</h2>
        <p className={classes["screen-auth__head--description"]}>
          Без тебя тут было так себе. Войди в свою учетную запись и погнали!
        </p>
        <Form haveAnAcount={false} onSubmit={handleRegister} />
      </div>

      <div className={classes["screen-auth__footer"]}>
        Уже есть аккаунт?
        <Link to='/login'>
          <ATag style={{ textDecoration: "none" }}>Войти</ATag>
        </Link>
      </div>
    </Card>
  );
};

export default Register;
