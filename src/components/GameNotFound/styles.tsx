import styled from 'styled-components';
import { BasicDivWrapper} from "../BasicDivWrapper";

export const GameNotFoundWrapper = styled(BasicDivWrapper)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
`;
export const GameNotFoundText = styled.h1`
  > svg {
    font-size: 6rem;
    color: #46be0f;
  }
  font-size: 6rem;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 3rem;
`;
