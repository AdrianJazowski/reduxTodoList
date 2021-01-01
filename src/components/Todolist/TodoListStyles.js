/** @format */

import styled, { css } from "styled-components";
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export const TodoListWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const DeleteButton = styled.button`
// cursor: pointer;
// outline:none;
// border:none
// ${({deleteBtn})=> deleteBtn && css `
//   <AiFillDelete/>
// ` }
// `;
export const SwitchedWrapperButton = styled.button`
  font-size: 25px;
  color: burlywood;
  margin: 10px 0 5px 10px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`;
export const DeleteButton = styled(AiFillDelete)`
  font-size: 25px;
  color: burlywood;
  margin: 10px;
  cursor: pointer;
`;
export const EditButton = styled(AiFillEdit)`
  color: burlywood;
  font-size: 25px;
  margin: 10px;
  cursor: pointer;
`;
export const DoneButton = styled(AiOutlineFileDone)`
  font-size: 25px;
  color: burlywood;
  margin: 10px;
  cursor: pointer;
`;
export const NotDoneYetButton = styled(ImCross)`
  font-size: 25px;
  color: burlywood;
  margin: 10px;
  cursor: pointer;
`;
export const TodoH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
  color: #dc143c;
  margin: 20px;
  text-transform: uppercase;
`;
export const TodoListUl = styled.ul`
  list-style-type: none;
`;
export const TodoListLi = styled.li`
  display: flex;
  margin: 10px;
  border: solid rgb(100 148 255 / 49%);
  &:nth-child(2n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(109, 194, 88, 0.678) 100%
    );
  }
  &:nth-child(2n + 1) {
    background: linear-gradient(
      90deg,
      rgba(109, 194, 88, 0.678) 0%,
      rgba(255, 12, 241, 1) 100%
    );
  }
`;
export const TodoTitle = styled.h4`
  align-self: center;
  width: 70%;
  color: ${(props) => (props.isDone ? "black" : "white")};
  font-size: 20px;
  margin: 10px;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  overflow-wrap: anywhere;
  transition: 0.8s;
`;
