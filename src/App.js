import styled from 'styled-components/macro';

export const App = () => {
  return (
    <Wrapper>
      <a href='#'>Anchior1</a>
      <a href='#ttyt'>Anchior2</a>
      <main>
        <p>
          <span>Content 1</span>
        </p>
      </main>
      <main className={'first-main'}>
        <p>
          <span>Content 2</span>
        </p>
        <p>
          <span>Content 2</span>
        </p>
      </main>
      <main>
        <p>
          <span>Content 3</span>
        </p>
        <section>
          <span>Content 2</span>
        </section>
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

  a:visited {
    color: red;
  }

  .first-main {
    color: crimson;
  }
`;
