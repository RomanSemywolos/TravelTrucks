import { createSlice } from "@reduxjs/toolkit";

// Слайс для управління улюбленцями
const slice = createSlice({
  name: "favourites",
  initialState: { items: [] },
  reducers: {
    // Додавання або видалення улюбленця
    toggleFavourite: (state, action) => {
      const index = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1); // Видалити з улюбленців
      } else {
        state.items.push(action.payload); // Додати до улюбленців
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;
