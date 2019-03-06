import styled from "../../../../styles/themed-styled";

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export { ButtonContainer, TextArea };
