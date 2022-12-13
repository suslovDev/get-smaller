import classes from "./Calculate.module.css";
import Input from "./UI/Input";
import { useState, useRef } from "react";
import Button from "./UI/Button";

const Calculate = () => {
  const [result, setResult] = useState(0);

  const amountRef = useRef();
  const caloriRef = useRef();

  const handleCalculate = () => {
    const amount = +amountRef.current.value;
    const calori = +caloriRef.current.value;
    setResult((calori / 100) * amount);
  };

  return (
    <div className={classes["calculate-calori"]}>
      <span className={classes["calculate-calori__head"]}>
        Подбор количества
      </span>
      <Input type='number' placeholder='вес в граммах' ref={amountRef} />
      <Input type='number' placeholder='калорий на 100гр.' ref={caloriRef} />
      <Button onClick={handleCalculate}>Расчитать</Button>
      {result !== 0 && (
        <p className={classes["calculate-calori__result"]}>
          С этого ты получишь: {result.toFixed(0)} kcal
        </p>
      )}
    </div>
  );
};

export default Calculate;
