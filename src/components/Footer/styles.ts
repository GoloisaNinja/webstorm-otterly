import styled from 'styled-components';
import { BasicDivWrapper } from '../BasicDivWrapper';

export const FooterWrapper = styled(BasicDivWrapper)`
	background-color: black;
	margin-top: 6rem;
	padding-left: 0;
	padding-right: 0;
`;
export const OuterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const InnerWrapper = styled.div`
	display: flex;
`;
export const LogoText = styled.h4`
	font-size: 1.5rem;
	color: #fff;
	align-self: flex-end;
	margin-bottom: 1rem;
`;
export const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 3.5rem;
	margin-top: 1.5rem;
	> a:not(:last-child) {
		margin-bottom: 1.4rem;
	}
`;
export const FooterLink = styled.a`
	text-decoration: none;
	color: #fff;
	font-size: 1.4rem;
	font-weight: 700;
`;
export const Copyright = styled.h4`
	font-size: 1.5rem;
	font-weight: 700;
	color: #fff;
	margin-bottom: 1.2rem;
`;
