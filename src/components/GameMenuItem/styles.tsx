import styled, {css} from 'styled-components';

const commonMenuItem = css`
  text-align: left;
  font-family: 'VT323', monospace;
  font-size: 1.6rem;
  color: black;
  padding: .5rem;
`;
export const GameMenuItemWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropContentWrapper = styled.div`
  display: none;
  position: absolute;
  background-color: #dbdbdb;
  min-width: 150px;
  padding: 1.25rem;
  z-index: 1;
  &.show {
    display: block;
  }
`;
export const MenuButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-family: 'VT323', monospace;
  font-size: 1.65rem;
  margin-left: 2rem;
  color: black;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  > p {
    ${commonMenuItem};
  }
  > button {
    ${commonMenuItem};
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;