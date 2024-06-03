import Filters from "components/Filters";
import Cards from "components/Cards";

import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <section className={css.catalog}>
      <Filters />
      <Cards />
    </section>
  );
};

export default Catalog;
