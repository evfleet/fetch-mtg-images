import styled from "../../styles/themed-styled";

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.background};
`;

export { Container, Wrapper };
