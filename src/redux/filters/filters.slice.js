import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

// Слайс для управління фільтрами
const slice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    // Зміна фільтрів
    changeFilter: (state, action) => {
      state.form = action.payload.form;
      state.location = action.payload.location;
      state.features = action.payload.features;
    }
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
