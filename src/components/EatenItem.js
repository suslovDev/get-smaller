import classes from "./EatenItem.module.css";
import ButtonRemove from "./UI/ButtonRemove";

const EatenItem = ({ prod, maxValue, onDelete, onNavigate }) => {
  const eatenItemStyle = {
    width: `${(+prod.calori / maxValue) * 100}%`,
  };
  const handleDelete = () => {
    onDelete(prod.id);
  };

  const handleClick = () => {
    onNavigate(1, prod.name);
  };
  return (
    <li className={classes["eaten-item"]}>
      <ButtonRemove onClick={handleDelete} />
      <div className={classes["eaten-item__container"]} onClick={handleClick}>
        <div>
          {prod.name}
          <br />
          <span className={classes["eaten-item__total"]}>
            {prod.calori} кКал
          </span>
        </div>
        <div className={classes["eaten-item__chart"]} style={eatenItemStyle} />
      </div>
    </li>
  );
};

export default EatenItem;
