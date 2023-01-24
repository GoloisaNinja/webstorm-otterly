import styled, { keyframes } from 'styled-components';
import { BasicDivWrapper } from '../BasicDivWrapper';

const blink = keyframes`
  0% { opacity: 1}
  100% { opacity: 0}
`;
const fadeIn = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;

export const HeroWrapper = styled(BasicDivWrapper)`
	margin-top: 7.5rem;
`;
export const OuterWrapper = styled.div`
	padding: 3rem 0 5rem 0;
	line-height: 1;
	width: 100%;
`;

export const PixelGameImageWrapper = styled.div`
  position: relative;
    display: flex;
    align-items: center;
    //margin-top: 3rem;
    > p {
      background: #fff;
      border-radius: 3rem;
      align-self: flex-start;
      margin-top: 2.5rem;
      padding: 2rem;
      font-family: 'VT323', monospace;
      font-size: 3rem;
      font-weight: 600;
      color: #000000;
      margin-left: -6rem;
      min-width: 135px;
      text-align: center;
      @media (max-width: 445px) {
        font-size: 2.6rem;
      }
    }
  
`;
export const HeroText = styled.h1`
	font-size: 6rem;
	color: #fff;
	line-height: 1.2;
	&::after {
		content: '_';
		margin-left: 0.5rem;
		font-weight: 300;
		animation-name: ${blink};
		animation-iteration-count: 5;
		animation-duration: 1s;
		animation-timing-function: linear;
	}
  @media (max-width: 385px) {
    font-size: 5rem;
  }
	@media (max-width: 592px) {
		height: 14.4rem;
	}
	@media (min-width: 1000px) {
		font-size: 8rem;
	}
`;
export const HeroSubText = styled.h2`
	font-family: 'Caveat', cursive;
	font-size: 5.5rem;
	color: #fff;
	text-shadow: 0 0 5px #fff, 0 0 10px #d84dff, 0 0 15px #d84dff,
		0 0 20px #d84dff, 0 0 25px #d84dff, 0 0 35px #d84dff, 0 0 40px #d84dff;
	animation-name: ${fadeIn};
	animation-delay: 2.5s;
	animation-duration: 1.4s;
	animation-fill-mode: backwards;
	@media (min-width: 1000px) {
		font-size: 7rem;
	}
`;
export const HeroContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
    margin-top: 4rem;
`;
export const HeroBGOtterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 400px;
  animation: ${fadeIn} 3s;
  animation-delay: .4s;
  animation-fill-mode: backwards;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .07;
    background-image: url('/images/pixelGameBG.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0;
`;
export const HeroInfoBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 250px;
  @media (max-width: 350px) {
    min-height: 250px;
  }
  @media (min-width: 351px) {
    min-height: 200px;
  }
  @media (min-width: 425px) {
    min-height: 185px;
  }
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: left;
	width: 100%;
	margin-top: 6rem;
	> button:last-child {
		margin-left: 3rem;
	}
`;
