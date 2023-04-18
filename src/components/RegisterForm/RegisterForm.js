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
        />
      </InputWrapper>

      <ButtonStyled variant="contained" type="submit">
        Register
      </ButtonStyled>
    </RegisterFormStyled>
  );
};
