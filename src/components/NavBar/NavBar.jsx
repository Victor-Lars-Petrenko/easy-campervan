import { NavLink } from "react-router-dom";

import items from "../../assets/items/NavBarItems";

import sprite from "../../assets/images/icons.svg";
import css from "./NavBar.module.css";

const NavBar = () => {
  const elements = items.map(({ id, linkTo, text, icon }) => (
    <li key={id} className={css.text}>
      <NavLink to={linkTo} className={css.link}>
        <svg className={css.icon}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={css.header}>
      <nav className={css.navBar}>
        <ul className={css.navList}>{elements}</ul>
      </nav>
    </header>
  );
};

export default NavBar;
