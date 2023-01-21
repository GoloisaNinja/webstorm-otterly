import React from 'react';
import GamesGrid from "../../components/GamesGrid";
import { GamesPageHeroText, GamesPageHeroSubText, HeroWrapper, OverridePageWrapper } from "./styles";
import { PurpleSpan } from "../../components/PurpleSpan";

const GamesPage: React.FC = () => {
	return (
		<OverridePageWrapper padding={'1rem'}>
			<HeroWrapper>
				<GamesPageHeroText><PurpleSpan>Otterly</PurpleSpan> Games Web Archive</GamesPageHeroText>
				<GamesPageHeroSubText>Browse our collection of retro text adventure games. Sit back. Chill. It's about to get otterly amazing in up in here.</GamesPageHeroSubText>
			</HeroWrapper>
			<GamesGrid />
		</OverridePageWrapper>
	);
};
export default GamesPage;
