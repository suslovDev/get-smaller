import { useState } from "react";
import classes from "./FoundFood.module.css";
import AddProduct from "./AddProduct";
import ProdItem from "./ProdItem";

const FoundFood = ({
  products,
  isAddToFavor,
  onAddItem,
  onAddFavorite,
  onDelFavorite,
  markedName,
}) => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleAddItem = (item) => {
    setSelectedProduct(item);
    setShowAddProduct(true);
  };

  const handleHide = () => {
    setShowAddProduct(false);
  };

  if (showAddProduct) {
    return (
      <AddProduct
        product={selectedProduct}
        onAdd={onAddItem}
        onHide={handleHide}
      />
    );
  }

  return (
    <ul className={classes["find-food"]}>
      {products.map((prod) => {
        return (
          <ProdItem
            key={prod.id}
            isAddToFavor={isAddToFavor}
            id={prod.id}
            name={prod.name}
            calori={prod.calori}
            onAddItem={handleAddItem}
            onAddToFavorite={onAddFavorite}
            onDelFavorite={onDelFavorite}
            markedName={markedName}
          />
        );
      })}
    </ul>
  );
};

export default FoundFood;
