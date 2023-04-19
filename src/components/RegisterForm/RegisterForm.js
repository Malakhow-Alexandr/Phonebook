import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterFormStyled,
  TextFieldStyled,
  GoPersonStyled,
  GoMailStyled,
  InputWrapper,
  GoPasswordStyled,
  ButtonStyled,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);

    // Валидация на минимальное количество символов и наличие цифр и букв
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    if (!passwordRegex.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
      <InputWrapper>
        <GoPersonStyled />
        <TextFieldStyled
          required
          type="text"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
        />
      </InputWrapper>

      <InputWrapper>
        <GoMailStyled />
        <TextFieldStyled
          required
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
        />
      </InputWrapper>

      <InputWrapper>
        <GoPasswordStyled />
        <TextFieldStyled
          required
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          value={password}
          onChange={handlePasswordChange}
          error={error}
          helperText={
            error &&
            'Пароль должен содержать минимум 7 символов и включать цифры и буквы'
          }
          inputProps={{ minLength: 7 }}
        />
      </InputWrapper>

      <ButtonStyled variant="contained" type="submit">
        Register
      </ButtonStyled>
    </RegisterFormStyled>
  );
};
