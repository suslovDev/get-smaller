/* import useLoader from "./hooks/use-loader"; */
import Loader from "./UI/Loader";
import Screen from "./Layout/Screen";
import ScreenHead from "./UI/ScreenHead";
import NavigateBottom from "./NavigateBottom";
import FoundFood from "./FoundFood";

const FavoritesScreen = ({
  current,
  favorite,
  isLoaded,
  onAddItem,
  onDelFavorite,
  onNavigate,
}) => {
  /* const isLoading = useLoader(favorite.length); */
  return (
    <Screen
      background='#fff'
      justify='flex-start'
      head={<ScreenHead text='Любимая еда' />}
      nav={<NavigateBottom onNavigate={onNavigate} current={current} />}>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <FoundFood
          products={favorite}
          isAddToFavor={false}
          onAddItem={onAddItem}
          onDelFavorite={onDelFavorite}
        />
      )}
    </Screen>
  );
};

export default FavoritesScreen;
