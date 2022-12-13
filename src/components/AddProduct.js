import { useRef, useEffect } from "react";
import classes from "./AddProduct.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";

const AddProduct = ({ product, onAdd, onHide }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    const caloriPerOne = Number(product.calori) / 100;
    const amount = Number(inputRef.current.value);
    const newProd = {
      ...product,
      calori: (caloriPerOne * amount).toFixed(0),
    };
    onAdd(newProd);
    onHide();
  };
  return (
    <div className={classes["add-product"]}>
      <span className={classes["add-product__head"]}>{product.name}</span>
      <Input type='number' placeholder='количество в граммах' ref={inputRef} />
      <div className={classes["add-product__action"]}>
        <Button onClick={handleAdd}>Добавить</Button>
      </div>
    </div>
  );
};

export default AddProduct;
