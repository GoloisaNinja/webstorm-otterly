import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% { -webkit-transform: rotate(360deg);}
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border-top-color: ${props => props.color};
  z-index: 1010;
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
`;

export const SpinnerOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  opacity: 90%;
`;