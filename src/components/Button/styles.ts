import styled from "styled-components";

export const ContainerButton = styled.button`
  display: flex;
  padding: 0.7rem 1.5rem;

  background: var(--yellow-600);
  color: var(--font-white);

  font-family: 'Roboto', sans-serif;

  border: none;
  border-radius: 0.2rem;

  transition: 0.3s ease-in-out;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
