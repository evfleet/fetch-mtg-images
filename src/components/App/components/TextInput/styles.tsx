import styled from "../../../../styles/themed-styled";

const TextArea = styled.textarea`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
`;

export { TextArea };
