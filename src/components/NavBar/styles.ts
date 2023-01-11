import styled from 'styled-components';

export const NavWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem 0 2rem;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333333;
`;
export const NavLinksWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	> a {
		color: #fff;
		text-decoration: none;
		font-size: 1.6rem;
		font-weight: 700;
		margin-right: 1.5rem;
	}
	> a:last-child {
		margin-right: 0;
	}
`;
