import axios, { AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ApiResponse<T> {
  data: T;
}

interface ErrorResponse {
  error: string;
}

export const loginUser = async (credentials: { email: string, password: string }) => {
  try {
    const response: AxiosResponse<ApiResponse<{ token: string }>> = await api.post('/login', credentials);
    return response.data.data.token;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response?.data) {
      throw new Error(axiosError.response.data.error || 'Login failed');
    } else {
      throw new Error('Login failed');
    }
  }
};

export const registerUser = async (userData: { email: string, password: string }) => {
  try {
    const response: AxiosResponse<ApiResponse<{ token: string }>> = await api.post('/register', userData);
    return response.data.data.token;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response?.data) {
      throw new Error(axiosError.response.data.error || 'Registration failed');
    } else {
      throw new Error('Registration failed');
    }
  }
};

export const getUserData = async (userId: number) => {
  try {
    const response: AxiosResponse<ApiResponse<any>> = await api.get(`/users/${userId}`);
    return response.data.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response?.data) {
      throw new Error(axiosError.response.data.error || 'Failed to fetch user data');
    } else {
      throw new Error('Failed to fetch user data');
    }
  }
};

export default api;
