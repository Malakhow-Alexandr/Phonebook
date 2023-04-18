import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const LabelEdit = styled.label`
  font-family: 'Alkatra', sans-serif;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StyledEditForm = styled(Form)`
  display: flex;
  gap: 20px;
`;

export const StyledErrorEditMessage = styled.p`
  position: absolute;
  font-family: 'Alkatra', sans-serif;
  width: 150px;
  top: -210px;
  left: 160px;
  font-size: 14px;
  color: #ff0015;
`;

export const StyledEditField = styled(Field)`
  width: 150px;
  height: 30px;
  padding: 2px 5px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  font-weight: 400;
  color: #444;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-color: #f08307;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
export const ButtonEdit = styled.button`
  width: 65px;
  height: 40px;
  font-size: 13px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Alkatra', sans-serif;
  font-weight: 400;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: #f08307;
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #b46306;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &:hover {
    color: black;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
  &:disabled {
    background-color: grey;
  }
  &:disabled:hover:after {
    display: none;
  }
  &:disabled:active {
    top: 0;
  }
`;
