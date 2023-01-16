import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    z-index: 2;
`;
export const NavLinksWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	}
	> a:last-child {
		margin-right: 0;
	}
`;
export const MyNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 1.5rem;
  transition: all .6s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => props.color};
  }
`;
