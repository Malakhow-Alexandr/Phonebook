import styled from '@emotion/styled';
import demopic from '../../images/demoPick.jpg';
import { Link } from 'react-router-dom';

export const PhoneBookDemoContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

export const PhoneBookDemoDescContainer = styled.div`
  padding-top: 80px;
  width: 50%;
`;

export const PhoneBookDemoStyledPicture = styled.div`
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
  margin-bottom: 10px;
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

export const LinkStyled = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: linear-gradient(
    0deg,
    rgba(255, 151, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  &::before {
    height: 0%;
    width: 2px;
  }
  &::after {
    width: 0%;
    height: 2px;
  }
  &:hover {
    color: rgba(251, 75, 2, 1);
    background: transparent;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span::before,
  & span::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  & span::before {
    width: 2px;
    height: 0%;
  }
  & span::after {
    height: 2px;
    width: 0%;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;
