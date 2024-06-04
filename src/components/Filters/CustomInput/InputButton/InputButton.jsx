import getProperBtnText from "assets/functions/getProperBtnText";

import sprite from "../../../../assets/images/icons.svg";

import css from "./InputButton.module.css";

const InputButton = ({ name, icon, type, isChecked, onChange }) => {
  let iconClass = css.inputIcon;
  if (icon === "AC") {
    iconClass += ` ${css.inputIconSpec}`;
  }
  if (icon === "van" || icon === "fullyIntegrated" || icon === "alcove") {
    iconClass += ` ${css.inputIconSpec} ${css.inputIconType}`;
  }

  return (
    <label className={css.inputButtonWrapper}>
      <input
        className={css.inputButton}
        name={name}
        type={type}
        value={icon}
        checked={isChecked === icon}
        onChange={onChange}
      />
      <svg className={iconClass}>
        <use href={`${sprite}#icon-${icon}`} />
      </svg>
      <span className={css.inputBtnText}>{getProperBtnText(icon)}</span>
    </label>
  );
};

export default InputButton;
