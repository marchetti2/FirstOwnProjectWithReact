import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  background: none;
  margin: 80px auto;
  padding: 20px;
`;

export const MainList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  gap: 20px;
  list-style: none;
  align-items: center;
  justify-content: center;
`;
