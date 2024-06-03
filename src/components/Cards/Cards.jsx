import CardList from "./CardList";
import css from "./Cards.module.css";
import LoadMoreBtn from "./LoadMoreBtn";

const Cards = () => {
  return (
    <div className={css.cards}>
      <CardList />
      <LoadMoreBtn />
    </div>
  );
};

export default Cards;
