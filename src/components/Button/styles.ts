import styled from 'styled-components';

function handleTextColor(s: string): string {
	switch (s) {
		case '#b907eb':
			return '#fff';
		default:
			return '#000000';
	}
}

function handleHoverColor(s: string): string {
	switch (s) {
		case '#b907eb':
			return '#9304ba';
		default:
			return '#e6e6e6';
	}
}

export const Button = styled.button`
	font-size: 1.6rem;
	font-weight: 500;
	background-color: ${(props) => props.color};
	color: ${(props) => handleTextColor(props.color!)};
	border-radius: 5px;
	padding: 2rem;
	&:hover {
		background: ${(props) => handleHoverColor(props.color!)};
		transition: all 0.4s ease-in;
	}
`;
