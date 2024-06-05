import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/favorites/favorites-selectors";

import Cards from "components/Cards";

import css from "./Favorites.module.css";

const Favorites = () => {
  const cardsArr = useSelector(selectFavoriteCampers);

  return (
    <>
      {cardsArr.length === 0 && (
        <div className={css.nothingWrap}>
          <p className={css.nothingText}>
            You haven't chosen your favorite campervans yet. You can do this in
            the Catalog
          </p>
        </div>
      )}
      {cardsArr[0] && (
        <section className={css.favorites}>
          <div className={css.favTextWrapper}>
            <p className={css.favText}>Enjoy your favourite Campervans</p>
          </div>
          <div className={css.cardsWrap}>
            <Cards cardsArr={cardsArr} />
          </div>
        </section>
      )}
    </>
  );
};

export default Favorites;
