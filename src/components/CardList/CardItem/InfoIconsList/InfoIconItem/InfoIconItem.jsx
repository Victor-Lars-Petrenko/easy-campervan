import sprite from "../../../../../assets/images/icons.svg";

import css from "./InfoIconItem.module.css";

const InfoIconItem = ({ detail }) => {
  const [text, icon] = detail.split(", ");

  let iconStyle = css.icon;
  const weirdIcons = ["adults", "AC", "petrol", "toilet", "gas"];
  if (weirdIcons.includes(icon)) iconStyle += ` ${css.weirdIcon}`;

  return (
    <li className={css.item}>
      <svg className={iconStyle}>
        <use href={`${sprite}#icon-${icon}`} />
      </svg>
      <span className={css.text}>{text}</span>
    </li>
  );
};

export default InfoIconItem;
