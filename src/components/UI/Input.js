import { useState, forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ type, placeholder, className }, ref) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputClasses = className
    ? `${classes.input} ${className}`
    : classes.input;
  return (
    <input
      ref={ref}
      onChange={handleChange}
      value={value}
      type={type ? type : "text"}
      className={inputClasses}
      placeholder={placeholder ? placeholder : ""}
    />
  );
});

export default Input;
