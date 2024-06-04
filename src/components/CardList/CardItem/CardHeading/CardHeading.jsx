import sprite from "../../../../assets/images/icons.svg";

import css from "./CardHeading.module.css";

const CardHeading = ({ name, price }) => {
  const handleClick = () => {};

  const isFavorite = false;

  const heartStyle = isFavorite
    ? `${css.heartIcon} ${css.heartIconFavorite}`
    : css.heartIcon;

  return (
    <div className={css.cardHeading}>
      <h2 className={css.cardTitle}>{name}</h2>
      <div className={css.cardHeadingRight}>
        <h2 className={css.cardTile}>{`€${price}.00`}</h2>
        <button type="button" onClick={handleClick}>
          <svg className={heartStyle}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardHeading;
