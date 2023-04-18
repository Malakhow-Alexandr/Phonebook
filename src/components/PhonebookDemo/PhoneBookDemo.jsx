import {
  PhoneBookDemoStyledPicture,
  PhoneBookDemoContainer,
  PhoneBookDemoDescContainer,
  DemoTitleStyled,
  DemoDescStyled,
} from './PhoneBookDemo.styled';

export const PhoneBookDemo = () => {
  return (
    <PhoneBookDemoContainer>
      <PhoneBookDemoDescContainer>
        <DemoTitleStyled>React Contacts Book</DemoTitleStyled>
        <DemoDescStyled>
          Our React application, "Contacts Book", is a secure and private
          solution for storing and managing contacts. Login functionality and a
          private backend ensure data confidentiality. It's a performant and
          scalable application built with React.
        </DemoDescStyled>
      </PhoneBookDemoDescContainer>
      <PhoneBookDemoStyledPicture></PhoneBookDemoStyledPicture>
    </PhoneBookDemoContainer>
  );
};
