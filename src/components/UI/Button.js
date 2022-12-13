import classes from "./Button.module.css";

const Button = ({ type, onClick, className, children }) => {
  const buttonClasses = className
    ? `${classes.button} ${className}`
    : classes.button;

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
