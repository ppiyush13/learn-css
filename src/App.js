import styled from 'styled-components/macro';

export const App = () => {
  return (
    <Wrapper>
      <a href='#'>Anchior1</a>
      <a href='#ttyt'>Anchior2</a>
      <div className='class boxSize' data-css={'open'}>
        box sizing
      </div>
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
  color: crimson;

  ${BoxSize} {
    border: 5px solid red !important;
  }

  .class {
    border: 5px solid yellow !important;
  }
`;

const BoxSize = styled.div`
  border: 5px solid red !important;
`;
