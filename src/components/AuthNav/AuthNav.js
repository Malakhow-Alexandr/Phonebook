import { LinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </div>
  );
};
