import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 85vh;
  justify-content: space-around;
`;

export const ComicDetailsContainer = styled.div`
  padding: 10px;

  h1 {
    font-size: 32px;
    padding-bottom: 20px;
    text-transform: capitalize;
  }

  h2 {
    text-transform: capitalize;
  }

  p {
    text-transform: capitalize;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;

    div {
      display: flex;
      padding: 5px 0px;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h1 {
      font-size: 20px;
    }

    div {
      grid-template-columns: 1fr;
    }
  }
`;

export const ImageWrapper = styled.div`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
