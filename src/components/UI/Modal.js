import classes from "./Modal.module.css";

const Modal = ({ children, isOpen, onClose }) => {
  const modalClasses = `${classes["modal"]} ${
    !isOpen ? classes["modal-close"] : ""
  }`;
  return (
    <div className={modalClasses}>
      <div className={classes["modal__backdrop"]} onClick={onClose} />
      <div className={classes["modal__content"]}>{children}</div>
    </div>
  );
};

export default Modal;
