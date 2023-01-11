import styled from 'styled-components';
import { BasicDivWrapper } from '../BasicDivWrapper';

interface Props {
	padding: string;
}

export const PageWrapper = styled(BasicDivWrapper)<Props>`
	margin-top: 7.5rem;
	@media (max-width: 450px) {
		padding: ${(props) => (props.padding ? props.padding : '3rem')};
	}
`;
