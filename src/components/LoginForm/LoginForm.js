import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormStyled } from './LoginForm.styled';
import {
  InputWrapper,
  TextFieldStyled,
  GoMailStyled,
  GoPasswordStyled,
  ButtonStyled,
} from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
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
        />
      </InputWrapper>
      <ButtonStyled type="submit" variant="contained">
        Log In
      </ButtonStyled>
    </LoginFormStyled>
  );
};
