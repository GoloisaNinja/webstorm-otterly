import styled from 'styled-components';
import { BasicDivWrapper } from '../BasicDivWrapper';

export const QuotesSectionWrapper = styled(BasicDivWrapper)`
    margin-top: 4rem;
	margin-bottom: 2rem;
`;
export const QuoteIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;
export const QuoteHeader = styled.h3`
	font-size: 4rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
	color: #eee;
	line-height: 1.2;
	@media (min-width: 1000px) {
		font-size: 6rem;
	}
`;
export const QuoteInfo = styled.p`
	font-size: 2.6rem;
    font-weight: 500;
    color: #ccc;
    line-height: 1.2;
`;
export const QuoteGrid = styled.div`
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 2rem 0;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 3.5rem;
	}
`;
export const Quote = styled.p`
	font-size: 1.6rem;
	font-weight: 700;
	font-style: italic;
	padding: 5rem 2rem;
	color: black;
	background-color: #ddd;
	border-radius: 5px;
	line-height: 1.3;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: all 0.4s ease-in-out;
	&:hover {
        background-color: ${props => props.theme.main_purple};
        color: #fff;
		transform: scale(1.03);
	}
	@media (min-width: 1000px) {
		font-size: 2rem;
	}
`;
