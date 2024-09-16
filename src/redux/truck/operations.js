import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axios';

// Отримання всіх вантажівок
export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/campers');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Отримання деталей конкретної вантажівки
export const fetchTruckDetails = createAsyncThunk(
  'trucks/fetchById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
