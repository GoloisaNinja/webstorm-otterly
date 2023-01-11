import styled, { css, keyframes } from 'styled-components';

const typing = keyframes`
	from {width: 0}
	to {width: 100%}
`;

const basicGameWrapperStyle = styled.div`
	background: #000000;
	border: 1px solid white;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	@media (min-width: 450px) {
		padding: 3rem;
	}
`;

const sourceCodeH2 = css`
	color: #fff;
	font-family: 'Source Code Pro', monospace;
	font-size: 2rem;
`;

const sourceCodeP = css`
	color: #46be0f;
	font-family: 'Source Code Pro', monospace;
	font-size: 3rem;
	font-weight: 800;
`;

const statusBoxesStyle = css`
	display: flex;
	flex-direction: column;
	min-height: 150px;
	> h2 {
		${sourceCodeH2};
	}
	> p {
		${sourceCodeP};
		text-align: center;
	}
`;

export const GameGridWrapper = styled.div`
	display: grid;
	align-items: stretch;
	grid-template-areas:
		'node points'
		'node mood'
		'node inventory';
	grid-template-rows: minmax(50px, 150px) minmax(75px, 150px) minmax(
			125px,
			max-content
		);
	grid-gap: 3rem;
	@media (max-width: 799px) {
		grid-template-areas:
			'mood points'
			'inventory inventory'
			'node node';
		grid-gap: 1.8rem;
	}
`;
export const PointsWrapper = styled(basicGameWrapperStyle)`
	${statusBoxesStyle};
	grid-area: points;
`;
export const MoodWrapper = styled(basicGameWrapperStyle)`
	${statusBoxesStyle};
	grid-area: mood;
`;
export const InventoryWrapper = styled(basicGameWrapperStyle)`
	${statusBoxesStyle};
	grid-area: inventory;
`;
export const NodeTextWrapper = styled(basicGameWrapperStyle)`
	grid-area: node;
	display: flex;
	justify-content: center;
	> p:first-child {
		color: #fff;
		font-size: 1.6rem;
		line-height: 1.3;
		margin-bottom: 4rem;
		font-family: 'Source Code Pro', monospace;
	}
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
	font-size: 1.3rem;
	color: #46be0f;
	margin-bottom: 1rem;
	font-family: 'Source Code Pro', monospace;
	font-weight: 800;
	animation: ${typing} 5s steps(75, end);
	animation-iteration-count: 1;
`;
export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 3rem;
`;
export const TerminalSpan = styled.span`
	font-family: 'Source Code Pro', monospace;
	font-size: 1.3rem;
	font-weight: 800;
	color: #be870f;
	margin-right: 1.2rem;
`;
export const StyledInput = styled.input`
	border: none;
	background: #2b2b2b;
	font-family: 'Source Code Pro', monospace;
	font-size: 1.3rem;
	color: #be870f;
	padding: 1rem;
	border-radius: 3px;
`;
export const ErrorTerminal = styled.p`
	font-family: 'Source Code Pro', monospace;
	font-size: 1.3rem;
	font-weight: 800;
	color: #ff3037;
`;
