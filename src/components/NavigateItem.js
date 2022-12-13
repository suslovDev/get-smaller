import { useState, useEffect } from "react";
import classes from "./NavigateItem.module.css";

const NavigateItem = ({ id, pic, onClick, current, eaten, isAdded }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (
      ((current === 1 && id === 2) || (current === 3 && id === 2)) &&
      isAdded
    ) {
      setAnimate(true);
    }
    return () => {
      setTimeout(() => {
        setAnimate(false);
      }, 1500);
    };
  }, [eaten]);

  const handleClick = () => {
    onClick(id);
  };

  const classesItem = current === id ? classes.current : "";

  let animClass = `${animate ? classes["boom"] : ""}`;

  return (
    <li
      onClick={handleClick}
      className={`${classesItem} ${classes["navigate-item"]} ${animClass}`}
      style={{ background: `url(${pic}) center no-repeat` }}
    />
  );
};

export default NavigateItem;
