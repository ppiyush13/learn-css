import styled from 'styled-components/macro';

export const App = () => {
  return (
    <Wrapper>
      <main className={'first-main'}>
        <p>
          <span>Content 1</span>
        </p>
      </main>
      <main>
        <p>
          <span>Content 2</span>
        </p>
      </main>
      <main>
        <p>
          <span>Content 3</span>
        </p>
      </main>
      <main>
        <p>
          <span>Content 4</span>
        </p>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  main {
    margin-top: 1rem;
  }
  main span {
    display: inline-block;
    width: 100%;
    background-color: wheat;
    padding: 0.25rem 1rem;
  }
`;
