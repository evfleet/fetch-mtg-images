import styled from "../../../../styles/themed-styled";

const CardHeader = styled.header`
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  padding-bottom: 0.5rem;
  margin-bottom: 0.2rem;
`;

const Heading = styled.h2`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading.family};
`;

const List = styled.ul`
  padding: 0.75rem 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 0.5rem 0;

  p {
    flex: 1;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    flex-basis: 10%;
  }
`;

const ListImage = styled.div`
  flex-basis: 10%;
  margin-right: 0.5rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export { CardHeader, Heading, List, ListItem, ListImage };
