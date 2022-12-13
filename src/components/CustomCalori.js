import classes from "./CustomCalori.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";

import { useRef } from "react";

const CustomCalori = ({ onAdd }) => {
  const caloriRef = useRef();

  const handleAdd = () => {
    const caloriValue = Number(caloriRef.current.value);
    const fakeProdItem = {
      id: Math.random().toString(),
      name: "Доп. калории",
      calori: caloriValue,
    };
    onAdd(fakeProdItem);
  };

  return (
    <div className={classes["custom-calori"]}>
      <span className={classes["custom-calori__head"]}>Добавить калории</span>
      <Input type='number' placeholder='+ кКал' ref={caloriRef} />
      <Button onClick={handleAdd}>Добавить</Button>
    </div>
  );
};

export default CustomCalori;
