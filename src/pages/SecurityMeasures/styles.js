import styled, { css } from 'styled-components';

export const Html = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div.attrs(props => ({
  disabled: props.hide,
}))`
  max-width: 1080px;
  background: #3b4453;
  border-radius: 4px;
  padding: 15px 30px 30px 30px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  transition: 0.2s;

  ${props =>
    props.hide &&
    css`
      filter: blur(0.9px);
      pointer-events: none;
    `}

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 28px;
    align-items: center;
    color: #fff;
  }

  svg {
    margin-right: 10px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5f5f5;
    font-size: 14;
    margin-top: 10px;
    line-height: 1.4;
  }
`;

export const ButtonBack = styled.button`
  background: none;
  border: none;
  max-width: 700px;
  margin-left: 98%;

  svg {
    transform: rotate(45deg);
    transition: fill 0.5s;
    &:hover {
      fill: #ff6666;
    }
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  max-width: 700px;
  margin-left: 85%;
  padding: 10px 15px;
  border-radius: 4px;
  background: #73c5ff;
  border: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ChoiceList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px));
  gap: 10px;
  list-style: none;
  justify-content: center;
  margin-top: 30px;
`;
