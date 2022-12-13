import classes from "./Warn.module.css";

const Warn = ({ title, content, pic, picSize }) => {
  const imgWidth = picSize ? picSize : "100%";

  return (
    <div className={classes["warn"]}>
      <img src={pic} width={imgWidth} />
      <h2 className={classes["warn__title"]}>{title}</h2>
      <p className={classes["warn__content"]}>{content}</p>
    </div>
  );
};

export default Warn;
