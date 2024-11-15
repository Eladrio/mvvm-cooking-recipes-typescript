import styled from "styled-components";

export const RecipeListContainer = styled.section`
  width: 60%;
  margin: 30px auto 0 auto;
  min-height: 40vh;
  padding-bottom: 15px;
`;

export const RecipeList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const CreateLink = styled.button`
  background: none;
  border: none;
  color: #112A46;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  font: inherit;
  outline: inherit;
  transition: background-color 0.3s, color 0.3s, outline 0.3s, border 0.3s, transform 0.3s;

  &:hover, &:focus {
    background-color: #212529;
    color: white;
    outline: 2px solid white;
    border: 1px solid #212529;
    border-radius: 4px;
    transform: scale(1.1);
  }
`;

export const ErrorContainer = styled.div`
  height: 250px;
  width: 750px;
  margin: 0 auto 20px auto;
  font-size: 24px;
`;