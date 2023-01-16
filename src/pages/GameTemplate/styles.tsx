import styled from 'styled-components';

const basicGameWrapperStyle = styled.div`
	background: ${props => props.theme.colors.screen_color};
	border-radius: 0;
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
export const GameScreenWrapper = styled(basicGameWrapperStyle)`
  margin-top: 3rem;
  padding: 0;
  border-radius: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const LoadingTextWrapper = styled(basicGameWrapperStyle)`
  justify-content: center;
  padding-top: 0;
  background-color: ${props => props.theme.colors.loading_screen_color};
`;
export const NodeTextWrapper = styled(basicGameWrapperStyle)`
	justify-content: center;
    padding-top: 0;
`;

export const ErrorTerminal = styled.p`
	font-family: 'VT323', monospace;
	font-size: 1.8rem;
	font-weight: 800;
	color: ${props => props.theme.colors.error_color};
    background-color: ${props => props.theme.colors.error_highlight};
`;
