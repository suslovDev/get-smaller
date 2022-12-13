import { useRef } from "react";
import classes from "./EditItem.module.css";
import Button from "./Button";
import Input from "./Input";

const EditItem = ({ type, title, placeholder, onSetLimit }) => {
  const inputRef = useRef();
  const handleSave = () => {
    onSetLimit(inputRef.current.value)
  };
  return (
    <div className={classes["edit-item"]}>
      <span className={classes["edit-item__head"]}>{title}</span>
      <Input type={type} placeholder={placeholder} ref={inputRef} />
      <Button onClick={handleSave}>Сохранить</Button>
    </div>
  );
};

export default EditItem;
