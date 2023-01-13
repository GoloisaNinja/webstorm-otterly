import styled from 'styled-components';
import { BasicDivWrapper} from "../BasicDivWrapper";

export const GameNotFoundWrapper = styled(BasicDivWrapper)`
    position: relative;
`;
export const MainWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 35%);
`;
export const GameNotFoundText = styled.h1`
  > svg {
    font-size: 6rem;
    color: #46be0f;
  }
  font-size: 6rem;
  line-height: 1.2;
  color: #fff;
`;
export const BackToGamesButton = styled.button`
  margin-top: 2rem;
  border: 2px solid #46be0f;
  color: #fff;
  padding: 1.2rem;
  font-family: 'Inter', sans-serif;
  transition: all .4s ease-in-out;
  &:hover {
    background-color: #46be0f;
    color: black;
  }
`;