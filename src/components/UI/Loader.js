import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes["blocks"]}>
      <div className={`${classes["block"]} ${classes["orange"]}`} />
      <div className={`${classes["block"]} ${classes["blue"]}`} />
    </div>
  );
};

export default Loader;
