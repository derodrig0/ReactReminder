import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  padding: 0 4rem;

  background: var(--purple-900);

  > p {
    color: var(--font-white);
  }
`;
