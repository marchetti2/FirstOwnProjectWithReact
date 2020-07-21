import styled, { css } from 'styled-components';

const colors = {
  red: css`
    &:hover {
      transform: translateY(-10px);
      border: 2px solid #ff6666;
    }
    svg {
      fill: #ff6666;
    }
  `,

  blue: css`
    &:hover {
      transform: translateY(-10px);
      border: 2px solid #73c5ff;
    }
    svg {
      fill: #73c5ff;
    }
  `,

  purple: css`
    &:hover {
      transform: translateY(-10px);
      border: 2px solid #627beb;
    }
    svg {
      fill: #627beb;
    }
  `,

  green: css`
    &:hover {
      transform: translateY(-10px);
      border: 2px solid #a4d68e;
    }
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.2;
    svg {
      fill: #a4d68e;
    }
  `,

  cyan: css`
    &:hover {
      transform: translateY(-10px);
      border: 2px solid #6ec5d8;
    }
    svg {
      fill: #6ec5d8;
    }
  `,
};

const Card = styled.div`
  height: 350px;
  width: 370px;
  background: #3b4453;
  border-radius: 4px;
  padding: 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
  border: 0.1px solid #3b4453;

  h2 {
    font-size: 28px;
    color: #f5f5f5;
    margin-top: 15px;
    text-align: center;
  }
  p {
    font-size: 14px;
    color: #9a9da3;
    margin-top: 10px;
    text-align: center;
    line-height: 1.4;
  }

  ${props => colors[props.color]}
`;

export default Card;
