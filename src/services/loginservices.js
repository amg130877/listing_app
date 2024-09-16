import { useMutation } from 'react-query';
import { useContentLayout } from '../hooks/useContentLayout';
import { useRootContext } from '../contextProvider/RootContext';
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
  const { setUser , setLoading } = useRootContext();

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      setLoading(true);
      setUser(data);
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