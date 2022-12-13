import { useRef } from "react";
import classes from "./CustomProduct.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";

const CustomProduct = ({ onAdd }) => {
  const [prodNameRef, prodCaloriRef, prodAmountRef] = [
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleAdd = () => {
    const prodNameValue = String(prodNameRef.current.value);
    const prodCaloriValue = Number(prodCaloriRef.current.value);
    const prodAmountValue = Number(prodAmountRef.current.value);

    const custumProduct = {
      id: Math.random().toString(),
      name: prodNameValue,
      calori: (prodCaloriValue / 100) * prodAmountValue,
    };
    onAdd(custumProduct);
  };

  return (
    <div className={classes["custom-product"]}>
      <span className={classes["custom-product__head"]}>
        Добавить свой продукт
      </span>
      <Input type='text' placeholder='Название продукта' ref={prodNameRef} />
      <Input
        type='number'
        placeholder='Калорий на 100гр.'
        ref={prodCaloriRef}
      />
      <Input type='number' placeholder='Количество (гр.)' ref={prodAmountRef} />
      <Button onClick={handleAdd}>Добавить</Button>
    </div>
  );
};

export default CustomProduct;
