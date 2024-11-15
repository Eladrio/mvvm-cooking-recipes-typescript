import styled from "styled-components";

export const ViewTitle = styled.h1`
  margin-top: 20px;
  font-size: 32px;
  
  &:focus {
    outline: none;
  }
`;

export const ErrorElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: red;
  font-weight: bold;
  height: 100%;
  width: 100%;
`;