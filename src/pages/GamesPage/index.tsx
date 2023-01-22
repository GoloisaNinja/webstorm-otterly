import React from 'react';
import GamesGrid from "../../components/GamesGrid";
import { HeroText, HeroSubText, HeroWrapper, OverridePageWrapper } from "../../styles/reusables";
import { PurpleSpan } from "../../components/PurpleSpan";

const GamesPage: React.FC = () => {
	return (
		<OverridePageWrapper padding={'1rem'}>
			<HeroWrapper>
				<HeroText><PurpleSpan>Otterly</PurpleSpan> Games Web Archive</HeroText>
				<HeroSubText>Browse our collection of retro text adventure games. Sit back. Chill. It's about to get otterly amazing in up in here.</HeroSubText>
			</HeroWrapper>
			<GamesGrid />
		</OverridePageWrapper>
	);
};
export default GamesPage;
