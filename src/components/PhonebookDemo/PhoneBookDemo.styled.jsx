import styled from '@emotion/styled';
import demopic from '../../images/demoPick.jpg';

export const PhoneBookDemoContainer = styled.section`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const PhoneBookDemoDescContainer = styled.div`
  position: absolute;
  left: -280px;
  width: 200px;
`;

export const PhoneBookDemoStyledPicture = styled.div`
  position: absolute;
  top: -40px;
  left: -20px;
  width: 300px;
  height: 300px;
  background-image: url(${demopic});
  background-size: cover;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const DemoTitleStyled = styled.h2`
  text-align: center;
  font-family: 'Alkatra', sans-serif;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #31302f;
`;

export const DemoDescStyled = styled.p`
  text-align: center;
  font-family: 'Alkatra', sans-serif;
  font-weight: 400;
  color: #31302f;
`;
