/** @format */

import styled, { css } from "styled-components";
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export const TodoListWrapper = styled.div``;

export const ButtonsWrapper = styled.div``;

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
`;
export const DeleteButton = styled(AiFillDelete)`
  font-size: 25px;
  color: burlywood;
`;
export const EditButton = styled(AiFillEdit)`
  color: burlywood;
  font-size: 25px;
`;
export const DoneButton = styled(AiOutlineFileDone)`
  font-size: 25px;
  color: burlywood;
`;
export const NotDoneYetButton = styled(ImCross)`
  font-size: 25px;
  color: burlywood;
`;
export const TodoH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
  color: crimson;
  margin: 20px;
  text-transform: uppercase;
`;
export const TodoListUl = styled.ul`
  list-style-type: none;
  /* margin: 10px; */
`;
export const TodoListLi = styled.li`
  display: flex;
  margin: 10px;
`;
export const TodoTitle = styled.h4`
  width: 70%;
  color: ${(props) => (props.isDone ? "grey" : "coral")};
  font-size: 20px;
  margin: 10px;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  overflow-wrap: anywhere;
  transition: 0.8s;
`;
