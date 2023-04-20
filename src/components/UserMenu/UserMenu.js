import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { formatName } from 'utils/formatName';
import { useState } from 'react';
import { Confirm } from 'components/Confirm/Confirm';
import { UserMenuContainer, UserName, LogoutBtn } from './Usermenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [openConfirm, setOpenConfirm] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <UserMenuContainer>
        <UserName>Welcome, {formatName(user.name)}</UserName>
        <LogoutBtn type="button" onClick={() => setOpenConfirm(true)}>
          Logout
        </LogoutBtn>
      </UserMenuContainer>
      <Confirm
        title="Are you sure?"
        text="Are you sure you want Exit?"
        btnAgree="Yes"
        btnDisagree="No"
        handleBtnAgree={() => {
          dispatch(logOut());
        }}
        open={openConfirm}
        setOpen={setOpenConfirm}
      />
    </>
  );
};
