import React, { useEffect, useContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import styled, { ThemeContext } from 'styled-components';
import { HeroInfoHeader, HeroInfo } from '../../styles/reusables';
import OtterSrc from '../../assets/pixelWaveOtter.webp';
import { Button } from '../Button';
import {PurpleSpan} from "../PurpleSpan";
import {
	HeroWrapper,
	HeroText,
	HeroSubText,
	HeroContentWrapper,
	PixelGameImageWrapper,
	OuterWrapper,
	InfoBox,
	ButtonWrapper,
	HeroBGOtterWrapper,
	HeroInfoBoxWrapper
} from './styles';
import TypeWriter from '../../helpers/TypeWriter';

const OtterImg = styled.img`
	width: 20rem;
	margin-right: 1.2rem;
	@media (min-width: 400px) {
		width: 25rem;
	}
	@media (min-width: 850px) {
		width: 30rem;
	}
`;

const LandingHero: React.FC = () => {
	const navigate = useNavigate();
	const [heroText, setHeroText] = useState("");
	const theme = useContext(ThemeContext);

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
		<HeroWrapper theme={theme}>
			<OuterWrapper>
				<HeroText id='heroText'></HeroText>
				<HeroSubText>history</HeroSubText>
			</OuterWrapper>
			<HeroContentWrapper>
				<HeroBGOtterWrapper>
					<PixelGameImageWrapper>
						<OtterImg src={OtterSrc} />
						<p>oh hai...</p>
					</PixelGameImageWrapper>
					<HeroInfoBoxWrapper>
						<InfoBox>
							<HeroInfoHeader color={'#fff'}>what is <PurpleSpan>otterly?</PurpleSpan></HeroInfoHeader>
							<HeroInfo color={"#fff"}>fun and funny text adventure games featuring otters, in beautiful retro styles, choose your theme, build your inventory, be an otter!</HeroInfo>
						</InfoBox>
					</HeroInfoBoxWrapper>
				</HeroBGOtterWrapper>
				<ButtonWrapper>
					<Button onClick={() => navigate("/games")} color={theme.button_purple}>browse games</Button>
					<Button onClick={() => navigate("/about")} color='#fff'>about us</Button>
				</ButtonWrapper>
			</HeroContentWrapper>
		</HeroWrapper>
	);
};
export default LandingHero;
