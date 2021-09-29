import styled from 'styled-components/macro';

export default () => {
  return (
    <Content>
      <Paragrapgh>Para</Paragrapgh>
    </Content>
  );
};

const Content = styled.p`
  color: brown;
  background-color: antiquewhite;
  padding: 1rem;
`;

const Paragrapgh = styled.p`
  margin: 4px;
`;

const Button = styled.button``;

const Element = styled.p`
  margin: unset;
`;
