export const animateCircle = (value, elRef) => {
  let circle = elRef.current;
  let radius = circle.r.baseVal.value;
  let circumference = radius * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const setProgress = (percent) => {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  };

  circle.style.strokeDashoffset = `${circumference}`;

  const interval = setInterval(setProgress(value), 100);
  return interval;
};
