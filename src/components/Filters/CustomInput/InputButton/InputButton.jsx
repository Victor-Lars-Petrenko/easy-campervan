import getProperBtnText from "assets/functions/getProperBtnText";

import sprite from "../../../../assets/images/icons.svg";

import css from "./InputButton.module.css";

const InputButton = ({ name, icon, type, checkedArr, onChange }) => {
  let iconClass = css.inputIcon;
  if (icon === "AC") {
    iconClass += ` ${css.inputIconSpec}`;
  }
  if (icon === "van" || icon === "fullyIntegrated" || icon === "alcove") {
    iconClass += ` ${css.inputIconSpec} ${css.inputIconType}`;
  }

  let labelClass = css.inputButtonWrapper;
  if (checkedArr.includes(icon)) {
    labelClass += ` ${css.activeButtonWrapper}`;
  }

  const isChecked = checkedArr.includes(icon);

  return (
    <label className={labelClass}>
      <input
        className={css.inputButton}
        name={name}
        type={type}
        value={icon}
        checked={isChecked}
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
