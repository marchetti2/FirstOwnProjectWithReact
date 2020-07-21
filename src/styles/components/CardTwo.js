import styled, { css } from 'styled-components';

const handle = {
  active: css``,

  blocked: css`
    pointer-events: none;
    opacity: 0.2;
  `,
};

const Card = styled.button`
  height: 50px;
  width: 300px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 5px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 14px;
  color: #333;
  text-align: center;

  ${props => handle[props.verif]}
`;

export default Card;
