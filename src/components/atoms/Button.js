/** @format */

import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  color: red;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s ease-in-out;
  text-align: center;
`;

const CustomButton = ({ children, onClickFn }) => {
  return <StyledButton onClick={onClickFn}>{children}</StyledButton>;
};

export default CustomButton;
