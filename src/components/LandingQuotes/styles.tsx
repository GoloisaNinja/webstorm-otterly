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

