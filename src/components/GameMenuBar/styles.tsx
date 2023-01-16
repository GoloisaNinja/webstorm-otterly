import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: .50rem;
  padding-bottom: .50rem;
  background-color: ${props => props.theme.colors.menu_bar_color};
  > svg {
    color: ${props => props.theme.colors.menu_items_color};
    //color: black;
    margin-left: .5rem;
    margin-right: 1rem;
    font-size: 3rem;
  }
  margin-bottom: 3rem;
`;
export const Points = styled.p`
  color: ${props => props.theme.colors.menu_items_color};
  font-family: 'VT323', monospace;
  font-size: 1.65rem;
  margin-left: auto;
  min-width: 85px;
`;