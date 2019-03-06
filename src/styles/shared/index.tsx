import styled from "../themed-styled";

const Button = styled.button`
  height: 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading.family};
  font-weight: ${({ theme }) => theme.fonts.heading.normalWeight};
`;

export { Button };
