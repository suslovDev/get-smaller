import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, get, child, update } from "firebase/database";
import EatenScreen from "../components/EatenScreen";
import FavoritesScreen from "../components/FavoritesScreen";
import SearchScreen from "../components/SearchScreen";
import SummaryScreen from "../components/SummaryScreen";
import {
  convertDateToPath,
  parseDateFromPath,
} from "../helpers/convert-parse-date";

const AppPage = () => {
  const { isLoggedIn, id } = useSelector((state) => state.user);

  const [caloriLimit, setCaloriLimit] = useState(1400);
  const [caloriLimitOk, setCaloriLimitOk] = useState(false);
  const [eatenFood, setEatenFood] = useState([]);
  const [eatenOk, setEatenOk] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [favoriteOk, setFavoriteOk] = useState(false);
  const [currentScreenId, setCurrentScreenId] = useState(1);
  const [fromFavorite, setFromFavorite] = useState("");

  const navigate = useNavigate();

  const totalEaten = eatenFood
    .map((item) => Number(item.calori))
    .reduce((sum, curr) => sum + curr, 0);
  const percentOfLimit = (totalEaten / caloriLimit) * 100;

  const now = new Date();
  const datePath = convertDateToPath(now);

  const db = getDatabase();
  const dbRef = ref(db);

  const initUserData = (
    userId,
    datePath,
    userPath,
    setUserData,
    setResponseOk
  ) => {
    get(
      child(dbRef, `users/${userId}/${convertDateToPath(datePath)}/${userPath}`)
    )
      .then((snapshot) => {
        setResponseOk(true);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        } else {
          /* console.log("Значения нет!"); */
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const writeUserData = (userId, datePath, userPath, userData) => {
    update(ref(db, "users/" + userId + "/" + datePath), {
      [userPath]: userData,
    });
  };

  useEffect(() => {
    initUserData(id, now, "total", setCaloriLimit, setCaloriLimitOk);
    initUserData(id, now, "eaten", setEatenFood, setEatenOk);
    initUserData(id, now, "favorite", setFavorite, setFavoriteOk);
  }, [favoriteOk, eatenOk, caloriLimitOk]);

  const handleNavigate = (screenId, payload) => {
    if (screenId === 0) {
      navigate("/");
    }
    setCurrentScreenId(screenId);
    setFromFavorite(payload);
  };

  const handleSetLimitCalori = (val) => {
    setCaloriLimit(Number(val));
    writeUserData(id, datePath, "total", val);
  };

  const handleAddEatenFood = (item) => {
    if (!item.name) return;
    console.log(item);
    setEatenFood([...eatenFood, item]);
    writeUserData(id, datePath, "eaten", [...eatenFood, item], datePath);
  };

  const handleDeleteEatenFood = (itemId) => {
    setEatenFood(eatenFood.filter((item) => item.id !== itemId));
    writeUserData(
      id,
      datePath,
      "eaten",
      eatenFood.filter((item) => item.id !== itemId)
    );
  };

  const handleAddToFavorite = (item) => {
    setFavorite([...favorite, item]);
    writeUserData(id, datePath, "favorite", [...favorite, item]);
  };

  const handleDelFromFavorite = (itemId) => {
    setFavorite(favorite.filter((item) => item.id !== itemId));
    writeUserData(
      id,
      datePath,
      "favorite",
      favorite.filter((item) => item.id !== itemId)
    );
  };

  return (
    <>
      {/* The line below here just for check */}
      {!isLoggedIn && <h1>Вы НЕ авторизованы</h1>}
      {/* End of checking */}
      {currentScreenId === 1 && (
        <SearchScreen
          current={currentScreenId}
          eaten={eatenFood}
          fromFavorite={fromFavorite}
          onAddFavorite={handleAddToFavorite}
          onAddItem={handleAddEatenFood}
          onNavigate={handleNavigate}
        />
      )}
      {currentScreenId === 2 && (
        <EatenScreen
          current={currentScreenId}
          eaten={eatenFood}
          isLoaded={eatenOk}
          onDelete={handleDeleteEatenFood}
          onNavigate={handleNavigate}
        />
      )}
      {currentScreenId === 3 && (
        <FavoritesScreen
          current={currentScreenId}
          favorite={favorite}
          isLoaded={favoriteOk}
          onAddItem={handleAddEatenFood}
          onDelFavorite={handleDelFromFavorite}
          onNavigate={handleNavigate}
        />
      )}
      {currentScreenId === 4 && (
        <SummaryScreen
          current={currentScreenId}
          percent={percentOfLimit}
          placeholder={caloriLimit}
          isLoaded={caloriLimitOk}
          value={eatenFood}
          onNavigate={handleNavigate}
          onSetLimit={handleSetLimitCalori}
        />
      )}
    </>
  );
};

export default AppPage;
