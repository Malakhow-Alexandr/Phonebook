import { useAuth } from 'hooks';
import { LinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <LinkStyled to="/contacts">Contacts</LinkStyled>
      ) : (
        <LinkStyled to="/">Home</LinkStyled>
      )}
    </nav>
  );
};
