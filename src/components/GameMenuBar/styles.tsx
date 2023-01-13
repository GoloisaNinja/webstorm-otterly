import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: .50rem;
  padding-bottom: .50rem;
  background-color: #dbdbdb;
  > svg {
    // color: ${props => props.color};
    color: black;
    margin-left: .5rem;
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
  //color: ${props => props.color};
  color: black;
`;
export const Points = styled.p`
  //color: ${props => props.color};
  color: black;
  font-family: 'VT323', monospace;
  font-size: 1.65rem;
  margin-left: auto;
  min-width: 85px;
`;