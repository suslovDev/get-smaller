import classes from "./Card.module.css";

const Card = ({ background, justify, children }) => {
  const addStyles = {
    background: background ? background : "initial",
    justifyContent: justify ? justify : "initial",
  };
  return (
    <section className={classes["main-screen"]} style={addStyles}>
      {children}
    </section>
  );
};

export default Card;
