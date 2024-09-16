// Вибірка всіх вантажівок
export const selectTrucks = (state) => state.trucks.trucks;

// Вибірка вантажівки за ID
export const selectTruck = (state) => state.trucks.truck;

// Вибірка стану завантаження
export const isLoading = (state) => state.trucks.isLoading;
