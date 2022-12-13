import classes from "./ButtonRemove.module.css";

const ButtonRemove = ({ onClick }) => {
  return (
    <button className={classes["button-remove"]} onClick={onClick}>
      X
    </button>
  );
};

export default ButtonRemove;
