import classes from "./ATag.module.css";

const ATag = ({ href, onClick, className, children }) => {
  const aTagClasses = className ? `${classes.link} ${className}` : classes.link;
  return (
    <a onClick={onClick} href={href ? href : "#"} className={aTagClasses}>
      {children}
    </a>
  );
};

export default ATag;
