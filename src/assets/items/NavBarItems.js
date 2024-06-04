import { nanoid } from "@reduxjs/toolkit";

const items = [
  {
    id: nanoid(),
    text: "EasyCampervan",
    linkTo: "/",
    icon: "icon-logo",
  },
  {
    id: nanoid(),
    text: "Catalog",
    linkTo: "/catalog",
    icon: "icon-catalog",
  },
  {
    id: nanoid(),
    text: "Favorites",
    linkTo: "/favorites",
    icon: "icon-heart",
  },
];

export default items;
