import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Link, Stack, IconButton, InputAdornment, TextField, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import loginSchema from '../../../schemas/loginSchema';
import Iconify from '../../../components/iconify';
import { useLogin } from '../../../services/loginservices';

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error } = useLogin();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate('/app/dashboard', { replace: true });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          {...register('email')}
          label="Email address"
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          {...register('password')}
          label="Password"
          type={showPassword ? 'text' : 'password'}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      {error && error.message && (
        <Snackbar
          sx={{ backgroundColor: 'red', color: 'white' }}
          open={!!error.message}
          autoHideDuration={3000}
          message={error.message}
        />
      )}

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isLoading}>
        Login
      </LoadingButton>
    </form>
  );
}
