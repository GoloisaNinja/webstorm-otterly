import styled from 'styled-components';

export const GamesWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 485px) {
    grid-template-columns: 1fr;
  }
`;