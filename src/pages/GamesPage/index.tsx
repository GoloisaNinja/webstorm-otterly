import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../../components/PageWrapper';

const GamesPage: React.FC = () => {
	return (
		<PageWrapper padding={''}>
			<h1 style={{ color: 'white' }}>Games Page</h1>
			<Link to='/games/1'>one way or the otter</Link>
		</PageWrapper>
	);
};
export default GamesPage;
