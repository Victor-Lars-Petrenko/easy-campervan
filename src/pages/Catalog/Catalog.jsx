import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/filter/filter-selectors";

import Filters from "components/Filters";
import Cards from "components/Cards";
import Loader from "components/Loader";

import { selectCampersLoading } from "../../redux/campers/campers-selectors";

import css from "./Catalog.module.css";

const Catalog = () => {
  const cardsArr = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectCampersLoading);

  return (
    <section className={css.catalog}>
      <Filters />
      {cardsArr.length !== 0 && !isLoading && <Cards cardsArr={cardsArr} />}
      {cardsArr.length === 0 && !isLoading && (
        <div className={css.nothingWrap}>
          <p className={css.nothingText}>Nothing was found for your request</p>
        </div>
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default Catalog;
