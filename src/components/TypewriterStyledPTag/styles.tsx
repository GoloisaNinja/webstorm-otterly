import styled, {keyframes} from "styled-components";

const typing = keyframes`
	from {width: 0}
	to {width: 100%}
`;
export const TypewriterStylePTag = styled.p`
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.8rem;
	color: ${props => props.color};
	margin-bottom: 1rem;
	font-family: 'VT323', monospace;
	font-weight: 800;
	animation: ${typing} 5s steps(75, end);
`;