import { LoginForm } from '../components/LoginForm/LoginForm';
import { PagesTitleStyled } from 'components/PagesTitle/PagesTitle.styled';

export default function Login() {
  return (
    <div>
      <PagesTitleStyled>Phonebook Log In</PagesTitleStyled>
      <LoginForm />
    </div>
  );
}
