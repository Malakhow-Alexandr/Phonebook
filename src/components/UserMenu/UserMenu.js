import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { formatName } from 'utils/formatName';
import { UserMenuContainer, UserName, LogoutBtn } from './Usermenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserName>Welcome, {formatName(user.name)}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </UserMenuContainer>
  );
};
