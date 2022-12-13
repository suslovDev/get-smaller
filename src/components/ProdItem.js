import classes from "./ProdItem.module.css";
import AddToFavoriteBtn from "./UI/AddToFavoriteBtn";

const ProdItem = ({
  id,
  name,
  calori,
  isAddToFavor,
  onAddItem,
  onAddToFavorite,
  onDelFavorite,
  markedName,
}) => {
  const match = markedName === name;
  const productItemClasses = `${classes["product-item"]} ${
    !match ? "" : classes["product-item--highlight"]
  }`;
  return (
    <li className={productItemClasses}>
      <div
        className={classes["plus-btn"]}
        onClick={() => {
          onAddItem({ id, name, calori });
        }}>
        +
      </div>
      <span className={classes["product-item__name"]}>{name}</span>
      <span
        className={classes["product-item__calori"]}>{`${calori} kcal`}</span>
      {isAddToFavor && (
        <AddToFavoriteBtn
          isAdded={false}
          onClick={() => onAddToFavorite({ id, name, calori })}
        />
      )}
      {!isAddToFavor && (
        <AddToFavoriteBtn isAdded={true} onClick={() => onDelFavorite(id)} />
      )}
    </li>
  );
};

export default ProdItem;
