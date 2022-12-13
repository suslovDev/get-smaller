import { useSelector } from "react-redux";
import StartScreen from "../components/StartScreen";

const HomePage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return <StartScreen isLoggedIn={isLoggedIn} />;
};

export default HomePage;

