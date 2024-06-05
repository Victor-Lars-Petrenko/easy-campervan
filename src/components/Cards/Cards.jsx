import CardList from "components/CardList";
import Button from "components/Button";

import css from "./Cards.module.css";

const Cards = ({ cardsArr }) => {
  return (
    <div className={css.cards}>
      <CardList cardsArr={cardsArr} />
      <Button
        type="button"
        text="Load more"
        btnStyle="loadMoreBtn"
        onClick={null}
      />
    </div>
  );
};

export default Cards;
