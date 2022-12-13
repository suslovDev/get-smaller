import classes from "./EatenList.module.css";
import EatenItem from "./EatenItem";

const EatenList = ({ eaten, onDelete, onNavigate }) => {
  const maxCalorieValue = Math.max(...eaten.map((item) => Number(item.calori)));
  return (
    <div className={classes["wrap"]}>
      <ol className={classes["eaten-list"]}>
        {eaten.map((prod) => {
          return (
            <EatenItem
              prod={prod}
              maxValue={maxCalorieValue}
              key={Math.random()}
              onDelete={onDelete}
              onNavigate={onNavigate}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default EatenList;
