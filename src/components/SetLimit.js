import classes from "./SetLimit.module.css";
import Card from "./UI/Card";
import EditItem from "./UI/EditItem";

const SetLimit = ({ placeholder, onSetLimit }) => {
  return (
    <Card background='#fff' justify='space-around'>
      <div className={classes["set-limit"]}>
        <EditItem
          type='number'
          title='Установите лимит калорий'
          placeholder={placeholder}
          onSetLimit={onSetLimit}
        />
      </div>
    </Card>
  );
};

export default SetLimit;
