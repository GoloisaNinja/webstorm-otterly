import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: .85rem;
  > svg {
    color: ${props => props.color};
    margin-right: 1rem;
    font-size: 3rem;
  }
  margin-bottom: 3rem;
`;
export const MenuButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-family: 'VT323', monospace;
  font-size: 1.65rem;
  margin-left: 2rem;
  color: ${props => props.color};
`;
export const Points = styled.p`
  color: ${props => props.color};
  font-family: 'VT323', monospace;
  font-size: 1.65rem;
  margin-left: auto;
  min-width: 85px;
`;