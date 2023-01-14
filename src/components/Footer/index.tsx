import React from 'react';
import styled from 'styled-components';
import { PurpleSpan } from '../PurpleSpan';
import {
	FooterWrapper,
	OuterWrapper,
	InnerWrapper,
	LogoText,
	LinksWrapper,
	FooterLink,
	Copyright,
} from './styles';
import Logo from '../../assets/footerLogo.webp';

const OtterLogo = styled.img`
	width: 10rem;
	margin-right: -1.5rem;
`;

const Footer: React.FC = () => {
	const currentYear: number = new Date().getFullYear();
	return (
		<FooterWrapper>
			<OuterWrapper>
				<InnerWrapper>
					<OtterLogo src={Logo} />
					<LogoText>ridiculous history</LogoText>
				</InnerWrapper>
				<LinksWrapper>
					<FooterLink to='/'>home</FooterLink>
					<FooterLink to='/games'>games</FooterLink>
					<FooterLink to='/'>about</FooterLink>
					<FooterLink to='/'>contact</FooterLink>
					<Copyright>
						copyright <PurpleSpan>{currentYear}</PurpleSpan>
					</Copyright>
				</LinksWrapper>
			</OuterWrapper>
		</FooterWrapper>
	);
};

export default Footer;
