import styled, {keyframes} from 'styled-components';

const typing = keyframes`
  from {width: 0}
  to {width: 100%}
`;

const blink = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1.85rem;
  letter-spacing: .12rem;
  line-height: 1.3;
  margin-bottom: 4rem;
  font-family: 'VT323', monospace;
`;
export const Status = styled.p`
  color: ${props => props.color};
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.85rem;
  margin-bottom: .3rem;
  font-family: 'VT323', monospace;
  animation: ${typing} 5s steps(95, end);
  &::after {
    content: " _";
    animation: ${blink} 1s infinite;
  }
`;