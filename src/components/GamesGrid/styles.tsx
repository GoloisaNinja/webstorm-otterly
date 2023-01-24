import styled from 'styled-components';

export const GamesWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 585px) {
    grid-template-columns: 1fr;
  }
`;