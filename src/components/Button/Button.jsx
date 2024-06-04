import css from "./Button.module.css";

const Button = ({ type, text, btnStyle, onClick = null }) => {
  let buttonClassName = css.btn;

  switch (btnStyle) {
    case "loadMoreBtn":
      buttonClassName += ` ${css.loadMoreBtn}`;
      break;
    case "submitBtn":
      buttonClassName += ` ${css.submitBtn}`;
      break;
    case "primaryBtn":
      buttonClassName += ` ${css.primaryBtn}`;
      break;
    default:
      break;
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
