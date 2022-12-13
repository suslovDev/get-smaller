import { useState, useRef } from "react";
import classes from "./SearchBlock.module.css";

const SearchBlock = ({ placeholder, onFindInServer }) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const inputData = inputRef.current.value;
    onFindInServer(inputData);
  };

  const handleBtnClick = () => {
    if (inputValue) {
      const inputData = inputRef.current.value;
      onFindInServer(inputData);
    }
  };

  return (
    <div className={classes["search-block"]}>
      <div className={classes["search-block__ico"]}></div>
      <input
        placeholder={placeholder}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button
        className={classes["search-block__btn"]}
        onClick={handleBtnClick}></button>
    </div>
  );
};

export default SearchBlock;
