import { Link } from "react-router-dom";
import classes from "./CongratsScreen.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Warn from "./Warn";  

const CongratsScreen = () => {
  return (
    <Card background='#fff' justify='space-around'>
      <Warn
        title={"Отлично"}
        content='Теперь Ты среди нас! Есть придется меньше чем раньше, так что
        наслаждайся каждым приемом пищи...'
        pic={"./img/congratulations.png"}
      />
      <div className={classes["screen-congrats__action"]}>
        <Link to='/app'>
          <Button>Начать</Button>
        </Link>
      </div>
    </Card>
  );
};

export default CongratsScreen;
