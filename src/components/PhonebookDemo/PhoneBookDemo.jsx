import {
  PhoneBookDemoStyledPicture,
  PhoneBookDemoContainer,
  PhoneBookDemoDescContainer,
  DemoTitleStyled,
  DemoDescStyled,
  LinkStyled,
} from './PhoneBookDemo.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const PhoneBookDemo = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  return (
    <PhoneBookDemoContainer>
      <PhoneBookDemoDescContainer>
        <DemoTitleStyled>React Contacts Book</DemoTitleStyled>
        <DemoDescStyled>
          Secure, private React app for contacts management with Redux, React
          Router, Material-UI, Formik, Axios, and Framer Motion. Highly
          performant and scalable.
        </DemoDescStyled>
      </PhoneBookDemoDescContainer>
      <PhoneBookDemoStyledPicture role="DemoPicture" />
      {isLogged ? (
        <LinkStyled to="/contacts">
          <span>Contacts</span>
        </LinkStyled>
      ) : (
        <LinkStyled to="/login">
          <span>Sign In</span>
        </LinkStyled>
      )}
    </PhoneBookDemoContainer>
  );
};
