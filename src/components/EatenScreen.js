import classes from "./EatenScreen.module.css";
import Loader from "./UI/Loader";
/* import useLoader from "./hooks/use-loader"; */
import Screen from "./Layout/Screen";
import ScreenHead from "./UI/ScreenHead";
import NavigateBottom from "./NavigateBottom";
import EatenList from "./EatenList";

const EatenScreen = ({ current, eaten, isLoaded, onDelete, onNavigate }) => {
  /* const isLoading = useLoader(eaten.length); */

  return (
    <Screen
      background='#fff'
      justify='flex-start'
      head={<ScreenHead text={"Съедено сегодня"} />}
      nav={<NavigateBottom onNavigate={onNavigate} current={current} />}>
      <section className={classes["eaten-food"]}>
        {!isLoaded && <Loader />}
        {isLoaded && (
          <EatenList
            eaten={eaten}
            onDelete={onDelete}
            onNavigate={onNavigate}
          />
        )}
      </section>
    </Screen>
  );
};

export default EatenScreen;
