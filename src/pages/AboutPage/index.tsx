import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { withTheme } from "styled-components";
import {
    HeroText,
    HeroSubText,
    HeroWrapper,
    OverridePageWrapper,
    HeroInfoHeader,
    HeroInfo,
    BasicFlexCWrapper,
    Quote,
    QuoteGrid,
} from "../../styles/reusables";
import {PurpleSpan} from "../../components/PurpleSpan";
import PixelSrc from '../../assets/gameWOtter.webp';
import {ImageWrapper, OverrideButton} from "./styles";

interface AboutPageProps {
    theme: {
        button_purple: string;
    };
}

const PixelImage = styled.img`
  width: 100%;
  margin-bottom: 6rem;
`;
const AboutPage: React.FC<AboutPageProps> = (props) => {
    const navigate = useNavigate();
    return (
        <OverridePageWrapper padding={'1rem'}>
            <HeroWrapper>
                <HeroText>Complete and <PurpleSpan>Otter</PurpleSpan> Nonsense</HeroText>
                <HeroSubText>
                    as the lore and conjecture around the origins and creation of otterly spun out of control, we
                    decided it was necessary to set a few of things straight. for the record. and for the good of all
                    human-kind.
                </HeroSubText>
            </HeroWrapper>
            <BasicFlexCWrapper marginTop={'1.5rem'} marginBottom={'6rem'}>
                <PixelImage src={PixelSrc} />
                <HeroInfoHeader>is <PurpleSpan>otterly</PurpleSpan> a crypto meta-verse token keto?</HeroInfoHeader>
                <HeroInfo>no. otterly is neither a coin, leg-less avatar, nor a weigh to lose weight (see what I did there?). otterly ridiculous history is a web application built to provide fun and sometimes demoralizing text adventure games
                        that feature otters as the characters and protagonists.
                </HeroInfo>
            </BasicFlexCWrapper>
            <BasicFlexCWrapper marginTop={'1.5rem'} marginBottom={'6rem'}>
                <HeroInfoHeader>
                    okay, but why otterly ridiculous <PurpleSpan>history?</PurpleSpan>
                </HeroInfoHeader>
                <HeroInfo>
                    you ask a lot of questions. our original idea centered around photoshopping otters into historical situations. and we still think that's
                    an extremely marketable idea - so don't steal it. however we decided to go the text adventure route for
                    absolutely no good reason whatsoever.
                </HeroInfo>
            </BasicFlexCWrapper>
            <BasicFlexCWrapper marginTop={'1.5rem'} marginBottom={'6rem'}>
                <HeroInfoHeader>
                    <PurpleSpan>otterly</PurpleSpan> plausible fast facts
                </HeroInfoHeader>
                <QuoteGrid>
                    <Quote>
                        otterly ridiculous history was conceived in a mastodon thread that got out of hand
                    </Quote>
                    <Quote>
                        you can use the contact page to submit your story ideas to us and we will turn it into a text adventure
                    </Quote>
                    <Quote>
                        our first game added to the site was "One Way or the Otter" a space opera adventure
                    </Quote>
                    <Quote>
                        otters have pockets in their armpits where they store their favourite rocks
                    </Quote>
                    <Quote>
                        the myth that otterly was almost bought out by a certain wildlife channel is absolutely not false
                    </Quote>
                    <Quote>
                        a typical otterly ridiculous history adventure takes almost a full week, write, design, and test
                    </Quote>
                </QuoteGrid>
            </BasicFlexCWrapper>
            <BasicFlexCWrapper marginTop={'1.5rem'} marginBottom={'6rem'}>
                <HeroInfoHeader>
                    get in <PurpleSpan>touch</PurpleSpan>
                </HeroInfoHeader>
                <HeroInfo>
                    drop us a message via our contact page. tell us how we're doing (only nice comments please - our
                    egos are so fragile). sell us your story idea! *all sales not to exceed $0
                </HeroInfo>
                <OverrideButton color={props.theme.button_purple} onClick={() => navigate("/contact")}>contact us</OverrideButton>
            </BasicFlexCWrapper>
        </OverridePageWrapper>
    )
}
export default withTheme(AboutPage)