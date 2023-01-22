import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import styled, {ThemeContext} from 'styled-components';
import orhLogo from '../../assets/navIcon.webp';
import { NavWrapper, NavLinksWrapper, MyNavLink } from './styles';

const Logo = styled.img`
	width: 7.5rem;
	cursor: pointer;
`;

const NavBar: React.FC = () => {
	const theme = useContext(ThemeContext)
	const navigate = useNavigate();
	return (
		<NavWrapper>
			<Logo
				alt='otterly ridiculous history logo featuring an Otter followed by the letters R and H'
				src={orhLogo}
				onClick={() => navigate('/')}
			/>
			<NavLinksWrapper>
				<MyNavLink color={theme.light_purple} to='/games'>games</MyNavLink>
				<MyNavLink color={theme.light_purple} to='/'>about</MyNavLink>
				<MyNavLink color={theme.light_purple} to='/contact'>contact</MyNavLink>
			</NavLinksWrapper>
		</NavWrapper>
	);
};
export default NavBar;
