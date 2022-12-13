import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


import { useSelector} from "react-redux";


const App = () => {
 
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {isLoggedIn && <Route path='/app' element={<AppPage />} />}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
