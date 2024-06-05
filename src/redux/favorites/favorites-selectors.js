import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/campers-selectors";

export const selectFavoriteIds = state => state.favorites.favoriteIds;

export const selectFavoriteCampers = createSelector(
  [selectFavoriteIds, selectCampers],
  (favoriteIds, campers) => {
    return campers.filter(({ _id }) => favoriteIds.includes(_id));
  }
);

export const makeSelectorCardFavorite = () => {
  return createSelector(
    [selectFavoriteIds, (state, cardId) => cardId],
    (favoriteIds, cardId) => {
      return favoriteIds.includes(cardId);
    }
  );
};
