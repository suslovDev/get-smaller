import classes from "./NavigateBottom.module.css";
import NavigateItem from "./NavigateItem";

const NavigateBottom = ({ onNavigate, current, eaten, isAdded }) => {
  const navigateList = [
    { id: 0, url: "/img/btn-home-x2.png" },
    { id: 1, url: "/img/btn-search-x2.png" },
    { id: 2, url: "/img/btn-list-x2.png" },
    { id: 3, url: "/img/btn-heart-x2.png" },
    { id: 4, url: "/img/btn-user-x2.png" },
  ];

  const handleClick = (id) => {
    onNavigate(id);
  };

  return (
    <ul className={classes["navigate"]}>
      {navigateList.map((item) => {
        return (
          <NavigateItem
            id={item.id}
            pic={item.url}
            current={current}
            eaten={eaten}
            isAdded={isAdded}
            onClick={handleClick}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default NavigateBottom;
