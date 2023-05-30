import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 0px;
  -webkit-box-align: center;
  background-color: rgb(32, 32, 32);
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;

  div {
    position: absolute;
    left: 32px;
  }

  p {
    font-size: 18px;
    color: #fff;
  }

  button {
    color: red;
    display: flex;
    gap: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
    align-items: center;
  }

  @media (max-width: 768px) {
    height: 60px;
    div {
      left: 16px;
    }

    p {
      font-size: 16px;
      color: #fff;
    }
  }
`;
