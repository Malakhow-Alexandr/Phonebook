import styled from '@emotion/styled';

export const WeatherButton = styled.button`
  position: absolute;
  top: -58px;
  left: 350px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  transition: transform 200ms ease;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: rotate(5deg);
  }
`;
