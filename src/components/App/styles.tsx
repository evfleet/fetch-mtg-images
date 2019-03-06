import styled from "../../styles/themed-styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.main`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-template-rows: ${({ theme }) => `${theme.sizing.header}rem auto ${theme.sizing.footer}rem`};
  grid-template-areas:
    "header header"
    "input list"
    "footer footer";
  grid-column-gap: 2%;
  width: 100%;
  max-width: 1000px;
`;

const InputContainer = styled.section`
  grid-area: input;
`;

const ListContainer = styled.section`
  grid-area: list;
`;

export { Container, InputContainer, ListContainer, Wrapper };
