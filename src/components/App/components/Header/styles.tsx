import styled from "../../../../styles/themed-styled";

const Container = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading.family};
  font-weight: ${({ theme }) => theme.fonts.heading.boldWeight};
  font-size: 1.25rem;
`;

export { Container, Title };
