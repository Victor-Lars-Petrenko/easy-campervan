import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/favorites/favorites-selectors";

import Cards from "components/Cards";

import css from "./Favorites.module.css";

const Favorites = () => {
  const cardsArr = useSelector(selectFavoriteCampers);

  return (
    <section className={css.favorites}>
      <div className={css.favTextWrapper}>
        <p className={css.favText}>Enjoy your favourite Campervans</p>
      </div>
      <div className={css.cardsWrap}>
        <Cards cardsArr={cardsArr} />
      </div>
    </section>
  );
};

export default Favorites;
