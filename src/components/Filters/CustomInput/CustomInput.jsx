import css from "./CustomInput.module.css";
import InputButton from "./InputButton";

const CustomInput = ({
  text,
  inputType,
  inputName,
  iconArr,
  isChecked,
  handleChange,
}) => {
  let fieldsetStyle = css.fieldset;

  if (inputType === "radio") {
    fieldsetStyle += ` ${css.lagrerMargin}`;
  }

  return (
    <fieldset className={fieldsetStyle}>
      <legend className={css.legend}>{text}</legend>
      <ul className={css.inputButtonList}>
        {iconArr.map((icon) => (
          <li key={`${icon}CustomInput`}>
            <InputButton
              name={inputName}
              icon={icon}
              type={inputType}
              isChecked={isChecked}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default CustomInput;
