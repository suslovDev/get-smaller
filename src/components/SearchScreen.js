import { useState, useEffect } from "react";
import classes from "./SearchScreen.module.css";
import { capitalizesWord } from "../helpers/capital-first";
import Loader from "./UI/Loader";
import Screen from "./Layout/Screen";
import ScreenHead from "./UI/ScreenHead";
import NavigateBottom from "./NavigateBottom";
import Button from "./UI/Button";
import Calculate from "./Calculate";
import CustomCalori from "./CustomCalori";
import CustomProduct from "./CustomProduct";
import FoundFood from "./FoundFood";
import Modal from "./UI/Modal";
import SearchBlock from "./UI/SearchBlock";

const SearchScreen = ({
  current,
  eaten,
  fromFavorite,
  onAddFavorite,
  onAddItem,
  onNavigate,
}) => {
  const [founded, setFounded] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalCalcIsOpen, setModalCalcIsOpen] = useState(false);
  const [modalCaloriIsOpen, setModalCaloriIsOpen] = useState(false);
  const [modalCustomIsOpen, setModalCustomIsOpen] = useState(false);

  const [isAdded, setIsAdded] = useState(false);

  const handleFindInServer = (name) => {
    setIsLoading(true);
    const prodLink =
      "https://api.tablicakalorijnosti.ru/autocomplete/foodstuff-activity-meal?query=" +
      encodeURI(name) +
      "&format=json";
    const data = { prodLink };
    const postDada = async () => {
      const response = await fetch(
        "https://vercel-node-19v22i8t3-suslovdev.vercel.app/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      const formatedProducts = result.map((item) => {
        const prod = {};
        prod.id = Math.random().toString(16);
        prod.name = capitalizesWord(item.title);
        prod.calori = item.value;
        return prod;
      });
      setFounded(formatedProducts);
      setIsLoading(false);
    };
    postDada();
  };

  useEffect(() => {
    if (!fromFavorite) return;
    handleFindInServer(fromFavorite);
  }, [fromFavorite]);

  const handleAddItem = (item) => {
    setModalCustomIsOpen(false);
    setModalCaloriIsOpen(false);
    onAddItem(item);
    setIsAdded(true);
  };

  const handleShowCustomModal = () => {
    setModalCustomIsOpen(true);
  };
  const handleShowCalcModal = () => {
    setModalCalcIsOpen(true);
  };
  const handleShowCaloriModal = () => {
    setModalCaloriIsOpen(true);
  };

  return (
    <Screen
      background='#fff'
      justify='flex-start'
      head={<ScreenHead text='Поиск продукта' />}
      nav={
        <NavigateBottom
          onNavigate={onNavigate}
          current={current}
          eaten={eaten}
          isAdded={isAdded}
        />
      }>
      <section className={classes["find-meal"]}>
        <SearchBlock
          placeholder='Начните печатать...'
          onFindInServer={handleFindInServer}
        />
        <div className={classes["side-btn"]}>
          <Button
            className={classes["side-btn__inner"]}
            onClick={handleShowCustomModal}>
            Свой
          </Button>
          <Button
            className={classes["side-btn__inner"]}
            onClick={handleShowCalcModal}>
            Подбор
          </Button>
          <Button
            className={classes["side-btn__inner"]}
            onClick={handleShowCaloriModal}>
            +Калории
          </Button>
        </div>

        {isLoading && <Loader />}
        {!isLoading && (
          <FoundFood
            isAddToFavor={true}
            markedName={fromFavorite}
            products={founded}
            onAddFavorite={onAddFavorite}
            onAddItem={handleAddItem}
          />
        )}
      </section>
      <Modal
        isOpen={modalCustomIsOpen}
        onClose={() => setModalCustomIsOpen(false)}>
        <CustomProduct onAdd={handleAddItem} />
      </Modal>
      <Modal isOpen={modalCalcIsOpen} onClose={() => setModalCalcIsOpen(false)}>
        <Calculate />
      </Modal>
      <Modal
        isOpen={modalCaloriIsOpen}
        onClose={() => setModalCaloriIsOpen(false)}>
        <CustomCalori onAdd={handleAddItem} />
      </Modal>
    </Screen>
  );
};

export default SearchScreen;
