import classes from "./ScreenHead.module.css";

const ScreenHead = ({ text }) => {
  return (
    <div className={classes["screen-head"]}>
      <span className={classes["screen-head__text"]}>{text}</span>
    </div>
  );
};

export default ScreenHead;
