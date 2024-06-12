import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/favorites/favorites-selectors";

import Cards from "components/Cards";
import Loader from "components/Loader";

import { selectCampersLoading } from "../../redux/campers/campers-selectors";

import css from "./Favorites.module.css";

const Favorites = () => {
  const cardsArr = useSelector(selectFavoriteCampers);
  const isLoading = useSelector(selectCampersLoading);

  return (
    <>
      {cardsArr.length === 0 && !isLoading && (
        <div className={css.nothingWrap}>
          <p className={css.nothingText}>
            You haven't chosen your favorite campervans yet. You can do this in
            the Catalog
          </p>
        </div>
      )}
      {cardsArr[0] && !isLoading && (
        <section className={css.favorites}>
          <div className={css.favTextWrapper}>
            <p className={css.favText}>Enjoy your favourite Campervans</p>
          </div>
          <div className={css.cardsWrap}>
            <Cards cardsArr={cardsArr} />
          </div>
        </section>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Favorites;
