import styled, {keyframes} from "styled-components";
const blink = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;
export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
    justify-content: center;
	margin-top: 3rem;
	margin-bottom: 3rem;
`;
export const TerminalSpan = styled.span`
	font-family: 'VT323', monospace;
	font-size: 1.8rem;
	font-weight: 800;
	color: ${props => props.theme.colors.input_text_color};
    background-color: ${props => props.theme.colors.input_highlight};
    padding-left: .15rem;
    padding-right: 1rem;
    &::after {
      content: ">>";
      animation: ${blink} 1s infinite;
    }
    
`;

export const StyledInput = styled.input`
    display: flex;
	border: none;
	background: ${props => props.theme.colors.input_highlight};
	font-family: 'VT323', monospace;
	font-size: 2.1rem;
	color: ${props => props.theme.colors.input_text_color};
    margin-left: -.3rem;
    min-height: 28.8px;
    padding-bottom: .2rem;
    flex: 1;
`;