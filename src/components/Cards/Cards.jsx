import { useState } from "react";

import CardList from "components/CardList";
import Button from "components/Button";

import css from "./Cards.module.css";

const Cards = ({ cardsArr }) => {
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);

  const total = cardsArr.length;
  const totalPages = Math.ceil(total / itemsPerPage);

  const handleLoadMore = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const displayedCards = cardsArr.slice(0, page * itemsPerPage);

  return (
    <div className={css.cards}>
      <CardList cardsArr={displayedCards} />
      {page < totalPages && (
        <Button
          type="button"
          text="Load more"
          btnStyle="loadMoreBtn"
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};

export default Cards;
