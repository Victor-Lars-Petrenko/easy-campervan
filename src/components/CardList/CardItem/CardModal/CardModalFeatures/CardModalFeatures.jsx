import InfoIconsList from "../../InfoIconsList";

import { charsArr } from "assets/items/detailsItems";

import {
  capitalizeWords,
  separateNumberAndLetter,
} from "assets/functions/formatString";

import css from "./CardModalFeatures.module.css";

const CardModalFeatures = ({ card }) => {
  return (
    <div className={css.features}>
      <InfoIconsList listVariant="long" card={card} />

      <h4 className={css.charsTitle}>Vehicle details</h4>
      <ul className={css.charsList}>
        {charsArr.map((char, i) => (
          <li className={css.charsItem} key={char}>
            <p className={css.charsText}>{capitalizeWords(char)}</p>
            <p className={css.charsText}>
              {i === 0
                ? capitalizeWords(card[char])
                : separateNumberAndLetter(card[char])}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardModalFeatures;
