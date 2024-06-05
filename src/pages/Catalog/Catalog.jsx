import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/filter/filter-selectors";

import Filters from "components/Filters";
import Cards from "components/Cards";

import css from "./Catalog.module.css";

const Catalog = () => {
  const cardsArr = useSelector(selectFilteredCampers);

  return (
    <section className={css.catalog}>
      <Filters />
      {cardsArr.length !== 0 && <Cards cardsArr={cardsArr} />}
      {cardsArr.length === 0 && (
        <div className={css.nothingWrap}>
          <p className={css.nothingText}>Nothing was found for your request</p>
        </div>
      )}
    </section>
  );
};

export default Catalog;
