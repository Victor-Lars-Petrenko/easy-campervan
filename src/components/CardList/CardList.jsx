import css from "./CardList.module.css";
import CardItem from "./CardItem";

const CardList = ({ cardsArr }) => {
  return (
    <ul className={css.cardList}>
      {cardsArr.map(card => (
        <li key={card._id}>
          <CardItem card={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
