import styled from "../../../../styles/themed-styled";

const Container = styled.footer`
  display: flex;
  grid-area: footer;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled.a`
  display: block;
  width: ${({ theme }) => `${theme.sizing.footer * 0.75}rem`};
  height: ${({ theme }) => `${theme.sizing.footer * 0.75}rem`};
`;

export { Container, Link };
