import { useState } from "react";
import Congrats from "../components/CongratsScreen";
import Register from "../components/Register";

const RegisterPage = () => {
  const [regIsSuccess, setRegIsSuccess] = useState(false);
  const handleSuccess = () => {
    setRegIsSuccess(true);
  };
  return (
    <>
      {!regIsSuccess && <Register onSuccess={handleSuccess} />}
      {regIsSuccess && <Congrats />}
    </>
  );
};

export default RegisterPage;
