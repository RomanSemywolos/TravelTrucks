import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  timeout: 10000, // Таймаут у мілісекундах (10 секунд)
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer YOUR_TOKEN' // Якщо потрібно
  }
});

// Обробка помилок
instance.interceptors.response.use(
  response => response,
  error => {
    console.error('API call error:', error); // Логування помилок
    return Promise.reject(error);
  }
);
