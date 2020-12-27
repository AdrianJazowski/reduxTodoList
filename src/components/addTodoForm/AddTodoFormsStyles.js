/** @format */

import styled from "styled-components";
import { BsFillPlusSquareFill } from "react-icons/bs";

export const CustomForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const TextArea = styled.textarea`
  background: transparent;
  color: coral;
  width: 60%;
  height: 120px;
  resize: none;
  padding: 10px;
  border: solid rgb(100 148 255 / 49%);
`;
export const AddFormH2 = styled.h2`
  color: #dc143c;
`;
export const PlusButton = styled(BsFillPlusSquareFill)`
  font-size: 50px;
  margin: 10px;
`;
export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
`;
