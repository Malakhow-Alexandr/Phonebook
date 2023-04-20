import styled from '@emotion/styled';

export const FooterContainerStyled = styled.footer`
  display: flex;
  margin-top: auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FooterMetaContainer = styled.div`
  display: flex;
  margin-top: auto;
  width: 960px;
  border-top: 1px solid #31302f;
  align-items: center;
  justify-content: space-between;

  background: #e2dddd;
`;

export const FooterRiteSide = styled.div`
  width: 50%;
  display: flex;
  margin-left: 10px;
  align-items: center;
`;

export const Year = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Dongle', sans-serif;
  font-weight: 400;
  font-size: 25px;
`;

export const FooterLeftSide = styled.div`
  width: 50%;
  display: flex;
  margin-right: 10px;
  justify-content: right;
  align-items: center;
  gap: 4px;
`;

export const AutorDesc = styled.p`
  position: relative;
  font-family: 'Dongle', sans-serif;
  font-weight: 400;
  font-size: 25px;

  &:before {
    content: '';
    position: absolute;
    top: 13px;
    left: -50px;
    width: 45px;
    height: 1px;
    background-color: black;
  }
`;

export const AuthorGit = styled.a`
  padding: 15px 0px;
  font-family: 'Dongle', sans-serif;
  font-weight: 400;
  font-size: 25px;
  text-decoration: none;
  color: inherit;
  transition: all 250ms ease;
  &:hover {
    color: #3fa0bb;
  }
`;
