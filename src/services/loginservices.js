import { useMutation } from 'react-query';
import apiClient from "./axios";

export const loginUser = async (credentials) => {
  console.log(credentials)
  const response = await apiClient.post('/api/auth/login', {
    "email": "john.doe@example.com",
    "password": "Password@123"
});
  return response.data;
};

export const useLogin = () => {
  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful', data);
    },
    onError: (error) => {
      // Handle login error
      console.error('Login failed', error);
    },
  });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};