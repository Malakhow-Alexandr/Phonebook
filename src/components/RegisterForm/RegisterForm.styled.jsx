import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { GoPerson, GoMail } from 'react-icons/go';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button } from '@mui/material';

export const RegisterFormStyled = styled.form`
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
`;

export const InputWrapper = styled.label`
  position: relative;
`;
export const TextFieldStyled = styled(TextField)`
  background-color: #fff;
`;

export const GoPersonStyled = styled(GoPerson)`
  position: absolute;
  top: 12px;
  left: -25px;
  transform: scale(1.1);
`;

export const GoMailStyled = styled(GoMail)`
  position: absolute;
  top: 12px;
  left: -25px;
  transform: scale(1.1);
`;

export const GoPasswordStyled = styled(RiLockPasswordLine)`
  position: absolute;
  top: 12px;
  left: -25px;
  transform: scale(1.1);
`;

export const ButtonStyled = styled(Button)``;
