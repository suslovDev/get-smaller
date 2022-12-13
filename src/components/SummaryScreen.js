import { useState } from "react";
import classes from "./SummaryScreen.module.css";
import Button from "./UI/Button";
import Screen from "./Layout/Screen";
import ScreenHead from "./UI/ScreenHead";
import NavigateBottom from "./NavigateBottom";
import Diagram from "./UI/Diagram";
import Modal from "./UI/Modal";
import SetLimit from "./SetLimit";
import Warn from "./Warn";
import Loader from "./UI/Loader";

const SummaryScreen = ({
  current,
  percent,
  placeholder,
  isLoaded,
  value,
  onNavigate,
  onSetLimit,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const innerValue = parseInt(
    value
      .map((item) => Number(item.calori))
      .reduce((sum, curr) => sum + curr, 0)
  );

  const extra = placeholder - innerValue;

  const isOver = extra < 0;

  const handleOpenLimitModal = () => {
    setIsShowModal(true);
  };

  const handleCloseLimitModal = () => {
    setIsShowModal(false);
  };

  const handleSetLimit = (val) => {
    onSetLimit(val);
    setIsShowModal(false);
  };

  return (
    <Screen
      background={"#fff"}
      justify={"space-around"}
      head={<ScreenHead text='Сводка по калориям' />}
      nav={<NavigateBottom onNavigate={onNavigate} current={current} />}>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <div>
          {!isOver && (
            <div className={classes["chart"]}>
              <Diagram current={percent} />
              <span className={classes["chart__inner"]}>{innerValue}</span>
            </div>
          )}
          {isOver && (
            <Warn
              title={`Упс... Перебор: ${-extra} kcal`}
              content={
                "Похудеть будет трудно, если ты так и будешь есть больше чем мало!"
              }
              pic={"./img/weigh.svg"}
              picSize={"70%"}
            />
          )}
          <div className={classes["screen-summary__action"]}>
            <Button onClick={handleOpenLimitModal}>Задать лимит</Button>
          </div>
          <Modal isOpen={isShowModal} onClose={handleCloseLimitModal}>
            <SetLimit placeholder={placeholder} onSetLimit={handleSetLimit} />
          </Modal>
        </div>
      )}
    </Screen>
  );
};

export default SummaryScreen;
