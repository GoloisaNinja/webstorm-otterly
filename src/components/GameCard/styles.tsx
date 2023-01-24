import styled from 'styled-components';
import {fadeIn} from "../../styles/animations";

interface GameCardWrapperProps {
    opacity: number;
}

export const GameCardWrapper = styled.div<GameCardWrapperProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  width: 100%;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation: ${fadeIn} 1.8s ease-in-out;
  transition: all .4s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
export const GameImage = styled.img`
  width: 100%;
`;
export const GameTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: black;
  justify-content: center;
  flex: 1;
`;
export const GameTitle = styled.h3`
  font-size: 2.4rem;
  color: ${props => props.color}
`;
export const GameDescription = styled.p`
    font-family: 'VT323', monospace;
    font-size: 1.6rem;
    line-height: 1;
    color: #eee;
`;