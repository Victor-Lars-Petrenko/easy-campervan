import CardList from "components/CardList";
import LoadMoreBtn from "./LoadMoreBtn";

import css from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={css.cards}>
      <CardList />
      <LoadMoreBtn />
    </div>
  );
};

export default Cards;
