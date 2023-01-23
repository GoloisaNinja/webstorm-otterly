import React from 'react';
import {useNavigate} from "react-router-dom";
import { withTheme } from "styled-components";
import {
    HeroText,
    HeroSubText,
    HeroWrapper,
    OverridePageWrapper,
    OtterImg,
    HeroInfoHeader,
    HeroInfo,
    BasicFlexCWrapper,
    Quote,
    QuoteGrid,
} from "../../styles/reusables";
import {PurpleSpan} from "../../components/PurpleSpan";
import OtterSrc from '../../assets/waving.webp';
import {OtterWrapper, OverrideButton} from "./styles";

interface AboutPageProps {
    theme: {
        button_purple: string;
    };
}
const AboutPage: React.FC<AboutPageProps> = (props) => {
    const navigate = useNavigate();
    return (
        <OverridePageWrapper padding={'1rem'}>
            <HeroWrapper>
                <HeroText><PurpleSpan>Otter</PurpleSpan> Nonsense</HeroText>
                <HeroSubText>
                    as the lore and conjecture around the origins and creation of otterly spun out of control, we
                    decided it was necessary to set a few of things straight. for the record. and for the good of all
                    human-kind.
                </HeroSubText>
            </HeroWrapper>
            <OtterWrapper>
                <OtterImg src={OtterSrc} />
                <HeroInfoHeader>what is <PurpleSpan>otterly</PurpleSpan> really?</HeroInfoHeader>
                <HeroInfo>otterly ridiculous history is a web application built to provide fun and sometimes demoralizing text adventure games
                        that feature otters as the characters and protagonists.
                </HeroInfo>
            </OtterWrapper>
            <BasicFlexCWrapper marginTop={'3rem'} marginBottom={'6rem'}>
                <HeroInfoHeader>
                    okay, but why otterly ridiculous <PurpleSpan>history?</PurpleSpan>
                </HeroInfoHeader>
                <HeroInfo>
                    our original idea centered around photoshopping otters into historical situations. and we still think that's
                    an extremely marketable idea - so don't steal it. however we decided to go the text adventure route for
                    absolutely no good reason whatsoever.
                </HeroInfo>
            </BasicFlexCWrapper>
            <BasicFlexCWrapper marginTop={'3rem'} marginBottom={'6rem'}>
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
            <BasicFlexCWrapper marginTop={'3rem'} marginBottom={'6rem'}>
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