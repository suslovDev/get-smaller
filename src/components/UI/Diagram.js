import { useEffect, useRef } from "react";
import classes from "./Diagram.module.css";
import { animateCircle } from "../../helpers/animate-circle";

const Diagram = ({ current }) => {
  const circleRef = useRef();
  useEffect(() => {
    const interval = animateCircle(+current, circleRef);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className={classes.diagram}>
      <svg className={classes["progress-ring"]} width='280' height='280'>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' stopColor='#31D6D6' />
          <stop offset='100%' stopColor='#FFDDDD' />
        </linearGradient>
        <circle
          stroke='#F5F5F5'
          strokeWidth='18px'
          fill='transparent'
          r='110'
          cx='50%'
          cy='50%'
        />
        <circle
          className={classes["progress-ring__circle"]}
          stroke='url(#gradient)'
          strokeWidth='8px'
          fill='transparent'
          r='120'
          cx='50%'
          cy='50%'
          ref={circleRef}
        />
      </svg>
    </div>
  );
};

export default Diagram;
