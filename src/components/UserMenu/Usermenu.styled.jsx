import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-family: 'Alkatra', sans-serif;
  font-size: 20px;
`;
export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 38px;
  color: #fff;
  padding: 0;
  line-height: 42px;
  font-family: 'Alkatra', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  background: #f08307;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;

  &:hover {
    color: #c41431;
    background: transparent;
    box-shadow: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    height: 2px;
    background: #b60816;
    box-shadow: -1px -1px 5px 0px #b60816, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }

  &:disabled {
    background: #aea8b3;
    background: linear-gradient(0deg, #958a97 0%, #a89da8 100%);
    &:before,
    &:after {
      height: 0;
      background: grey;
      box-shadow: none;
      transition: 0ms ease all;
    }
  }
`;
