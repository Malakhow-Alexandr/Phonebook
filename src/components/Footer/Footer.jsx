import {
  FooterContainerStyled,
  FooterMetaContainer,
  AuthorGit,
  FooterRiteSide,
  FooterLeftSide,
  Year,
  AutorDesc,
} from './Footer.styled';
import { FaReactStyled } from './FooterReactIcon';

export const Footer = () => {
  return (
    <FooterContainerStyled>
      <FooterMetaContainer>
        <FooterRiteSide>
          <Year>©2023</Year>
          <FaReactStyled />
        </FooterRiteSide>

        <FooterLeftSide>
          <AutorDesc>Develop By:</AutorDesc>
          <AuthorGit href="https://github.com/Malakhow-Alexandr">
            Malakhow Alexandr
          </AuthorGit>
        </FooterLeftSide>
      </FooterMetaContainer>
    </FooterContainerStyled>
  );
};
