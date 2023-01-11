import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import orhLogo from '../../assets/navIcon.webp';
import { NavWrapper, NavLinksWrapper } from './styles';

const Logo = styled.img`
	width: 7.5rem;
	cursor: pointer;
`;

const NavBar: React.FC = () => {
	const navigate = useNavigate();
	return (
		<NavWrapper>
			<Logo
				alt='otterly ridiculous history logo featuring an Otter followed by the letters R and H'
				src={orhLogo}
				onClick={() => navigate('/')}
			/>
			<NavLinksWrapper>
				<Link to='/games'>games</Link>
				<Link to='/about'>about</Link>
				<Link to='/contact'>contact</Link>
			</NavLinksWrapper>
		</NavWrapper>
	);
};
export default NavBar;
