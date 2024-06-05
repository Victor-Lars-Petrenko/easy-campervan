import sprite from "../../../../../../assets/images/icons.svg";

import css from "./ReviewItem.module.css";

const ReviewItem = ({ name, rating, comment }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <li key={i}>
      <svg
        className={
          i <= rating ? css.iconStar + " " + css.iconStarActive : css.iconStar
        }
      >
        <use href={`${sprite}#icon-star`} />
      </svg>
    </li>
  ));

  return (
    <li className={css.reviewItem}>
      <div className={css.reviewHeading}>
        <p className={css.reviewerIcon}>{name[0]}</p>
        <div className={css.nameStars}>
          <h4 className={css.reviewerName}>{name}</h4>
          <ul className={css.starList}>{stars}</ul>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </li>
  );
};

export default ReviewItem;
