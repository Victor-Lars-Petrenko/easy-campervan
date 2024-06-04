import getCardDetails from "assets/functions/getCardDetails";

import css from "./InfoIconsList.module.css";
import InfoIconItem from "./InfoIconItem";

const InfoIconsList = ({ listVariant, card }) => {
  const details = getCardDetails(listVariant, card);
  return (
    <ul className={css.list}>
      {details.map((detail) => (
        <InfoIconItem key={card._id + listVariant + detail} detail={detail} />
      ))}
    </ul>
  );
};

export default InfoIconsList;
