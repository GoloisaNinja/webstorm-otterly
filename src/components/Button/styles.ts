import styled from 'styled-components';

function handleTextColor(s: string): string {
	switch (s) {
		case '#b907eb':
			return '#fff';
		case '#000000':
			return '#46be0f';
		default:
			return '#000000';
	}
}

function handleHoverColor(s: string): string {
	switch (s) {
		case '#b907eb':
			return '#9304ba';
		case '#46be0f':
			return '#58ed13';
		case '#000000':
			return '#242424';
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
	transition: all 0.8s ease-in-out;
	&:hover {
		background: ${(props) => handleHoverColor(props.color!)};
	}
`;
