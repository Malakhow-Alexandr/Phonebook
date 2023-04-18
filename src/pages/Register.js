import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { PagesTitleStyled } from 'components/PagesTitle/PagesTitle.styled';

export default function Register() {
  return (
    <div>
      <PagesTitleStyled>Phonebook Registration</PagesTitleStyled>

      <RegisterForm />
    </div>
  );
}
