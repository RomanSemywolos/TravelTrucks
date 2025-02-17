import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { truckReducer } from './truck/truck.slice';
import { filtersReducer } from './filters/filters.slice';
import { favouritesReducer } from './favourites/favourites.slice';

// Конфігурації для зберігання редукторів
const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

// Налаштування Redux Store
export const store = configureStore({
  reducer: {
    trucks: truckReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Персистор для зберігання стану
export const persistor = persistStore(store);
