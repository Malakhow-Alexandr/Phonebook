import {
  HomeContainer,
  HomeTitleContainer,
} from 'components/Container/Container.styled';
import { HomePageTitleStyled } from 'components/PagesTitle/HomePageTItle';
import { PhoneBookDemo } from 'components/PhonebookDemo/PhoneBookDemo';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <HomeTitleContainer>
          <HomePageTitleStyled>Phonebook</HomePageTitleStyled>
        </HomeTitleContainer>
        <PhoneBookDemo />
      </HomeContainer>
    </>
  );
}
