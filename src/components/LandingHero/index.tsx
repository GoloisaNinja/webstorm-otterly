import React, { useEffect, useContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import styled, { ThemeContext } from 'styled-components';
import OtterSrc from '../../assets/waving.webp';
import { Button } from '../Button';
import {
	HeroWrapper,
	HeroText,
	HeroSubText,
	HeroContentWrapper,
	OtterWrapper,
	OuterWrapper,
	InnerWrapper,
	InfoBoxWrapper,
	InfoBox,
	HeroInfo,
	ButtonWrapper,
} from './styles';
import TypeWriter from '../../helpers/TypeWriter';

const OtterImg = styled.img`
	width: 25rem;
	margin-right: 1.2rem;
	@media (max-width: 400px) {
		width: 20rem;
	}
`;

const LandingHero: React.FC = () => {
	const navigate = useNavigate();
	const [heroText, setHeroText] = useState("");
	const theme = useContext(ThemeContext);
	const iBox1Txt: string = `> We know several things...
1: Otters are amazeballs
2: History can be kinda dry
3: Old school text adventure games
never get old
4: The way queue is spelled is dumb`;

	const iBox2Txt: string = `> So what is Otterly all about?
1: Retro-style text adventure games
2: Completely irreverent
3: Otter-injected historical
content
4: Otterly ridiculous fun`;

	function handleHeroText():void {
		setHeroText('Otterly Ridiculous')
	}
	useEffect(() => {
		if (document !== undefined && heroText !== "") {
			const el = document.getElementById('heroText')!;
			TypeWriter(heroText, el);
		}
		handleHeroText();
	}, [heroText]);
	return (
		<HeroWrapper>
			<OuterWrapper>
				<HeroText id='heroText'></HeroText>
				<HeroSubText>history</HeroSubText>
			</OuterWrapper>
			<HeroContentWrapper>
				<InnerWrapper>
					<OtterWrapper>
						<OtterImg src={OtterSrc} />
						<p>oh hai...</p>
					</OtterWrapper>
					<InfoBoxWrapper>
						<InfoBox>
							<HeroInfo>{iBox1Txt}</HeroInfo>
						</InfoBox>
						<InfoBox>
							<HeroInfo>{iBox2Txt}</HeroInfo>
						</InfoBox>
					</InfoBoxWrapper>
				</InnerWrapper>
				<ButtonWrapper>
					<Button onClick={() => navigate("/games")} color={theme.button_purple}>browse games</Button>
					<Button color='#fff'>about us</Button>
				</ButtonWrapper>
			</HeroContentWrapper>
		</HeroWrapper>
	);
};
export default LandingHero;
