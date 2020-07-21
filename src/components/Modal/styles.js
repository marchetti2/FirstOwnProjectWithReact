import styled, { css } from 'styled-components';

export const ContainerCard = styled.div.attrs(props => ({
  disabled: props.hide,
  centered: props.center,
}))`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #3b4453;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(136, 136, 136, 0.1);
    border: 1px solid rgb(154, 157, 163, 0.2);
  }
  width: 450px;
  height: 400px;
  background: #3b4453;
  margin-top: 160px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  border-radius: 4px;
  padding: 5px 30px 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  z-index: 1;
  transition: 0.2s;

  opacity: 0;
  visibility: hidden;
  filter: blur(1px);
  transform: scale(0.9);

  ${props =>
    props.hide &&
    css`
      filter: blur(0);
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    `}

  ${props =>
    props.center !== 'occupation' &&
    css`
      /*height: max-content;
      width: max-content;*/
      justify-content: center;
    `}
`;

export const TextBtn = styled.button`
  background: none;
  border: none;
  padding: 8px 0;

  color: #9a9da3;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    border: 1px solid #9a9da3;
  }
  /*
  & + button {
    border-top: 0.1px solid #666;
  }*/
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  padding: 8px 0;
  border-radius: 4px;
  background: #73c5ff;
  border: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
export const InputArea = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  border: 1px solid #9a9da3;
  padding: 8px 0;
  color: #9a9da3;
  font-size: 16px;
`;
