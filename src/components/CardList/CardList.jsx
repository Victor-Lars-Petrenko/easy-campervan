import { useSelector } from "react-redux";
import css from "./CardList.module.css";
import { selectCampers } from "../../redux/campers/campers-selectors";
import CardItem from "./CardItem";

const CardList = () => {
  const cardsArr = useSelector(selectCampers);
  return (
    <ul className={css.cardList}>
      {cardsArr.map((card) => (
        <li key={card._id}>
          <CardItem card={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
