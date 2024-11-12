import styled from "styled-components";

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputComponentBlock = styled.div`
  width: 50%;
  margin: 4px auto 0 auto;
`;

export const InputComponentElement = styled.input`
  background-color: floralwhite;
  display: block;
  width: 100%;
  text-align: center;
`;

export const InputComponentTextArea = styled.textarea`
  background-color: floralwhite;
  display: block;
  width: 100%;
  text-align: left;
  height: 75px;
  resize: none;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
`;

export const InputComponentError = styled.span`
  font-size: 14px;
  color: red;
`;