import classes from "./Screen.module.css";

const Screen = ({ justify, background, head, nav, children }) => {
  const addStyles = {
    background: background ? background : "#fff",
    justifyContent: justify ? justify : "spase-between",
  };

  return (
    <section
      className={classes["screen"]}
      style={{ background: addStyles.background }}>
      <header className={classes["screen__header"]}>{head}</header>
      <div
        className={classes["screen__scroll-content"]}
        style={{ justifyContent: addStyles.justifyContent }}>
        {children}
      </div>
      <footer className={classes["screen__footer"]}>{nav}</footer>
    </section>
  );
};

export default Screen;
