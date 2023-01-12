import styled, { keyframes } from 'styled-components';

const typing = keyframes`
	from {width: 0}
	to {width: 100%}
`;

const basicGameWrapperStyle = styled.div`
	background: #000000;
	//border: 1px solid white;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	@media (min-width: 450px) {
		padding: 3rem;
	}
`;
export const ScrollMarker = styled.div`
  height: 1px;
`;
export const NodeTextWrapper = styled(basicGameWrapperStyle)`
	display: flex;
	justify-content: center;
    padding-top: 0;
`;
export const Title = styled.h1`
	font-size: 5rem;
	color: #fff;
	text-align: center;
	margin-bottom: 2rem;
`;
export const NodeOptions = styled.p`
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.8rem;
	color: ${props => props.color};
	margin-bottom: 1rem;
	font-family: 'VT323', monospace;
	font-weight: 800;
	animation: ${typing} 5s steps(75, end);
`;

export const ErrorTerminal = styled.p`
	font-family: 'VT323', monospace;
	font-size: 1.8rem;
	font-weight: 800;
	color: ${props => props.color};;
`;
