import styled from "styled-components";

export const OptionCardStyles = styled.button`
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  width: 300px;
  cursor: pointer;
  transition: outline 0.3s, transform 0.3s, background-color 0.3s, color 0.3s;

  &:focus, &:hover {
    outline: 2px solid blue;
    transform: scale(1.03);
    background-color: #212529;
    color: white;
  }

`;