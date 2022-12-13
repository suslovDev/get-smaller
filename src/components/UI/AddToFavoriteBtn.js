import classes from "./AddToFavoriteBtn.module.css";

const AddToFavoriteBtn = ({ isAdded, onClick }) => {
  const content = isAdded ? "-" : "+";
  return (
    <div className={classes["add-to-favorite"]}>
      <span className={classes["add-to-favorite__content"]} onClick={onClick}>
        {content}
      </span>
    </div>
  );
};

export default AddToFavoriteBtn;
