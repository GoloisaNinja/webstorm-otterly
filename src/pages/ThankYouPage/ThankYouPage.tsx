import React from 'react';
import {HeroText, HeroSubText, HeroWrapper, OverridePageWrapper} from "../../styles/reusables";
import { useNavigate } from "react-router-dom";
import {PurpleSpan} from "../../components/PurpleSpan";
import { OverrideButton } from "./styles";

const ThankYouPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <OverridePageWrapper padding={"1rem"}>
            <HeroWrapper>
                <HeroText>We <PurpleSpan>Otterly</PurpleSpan> Thank You!</HeroText>
                <HeroSubText>Your form submission is complete and the team at Otterly will be reviewing it shortly!
                We don't want to brag, but we are SUPER popular, so please be sure and give us a few days to get back
                    to you! We promise. We're worth it.
                </HeroSubText>
                <OverrideButton color={'#b907eb'} onClick={() => navigate("/")}>Return Home</OverrideButton>
            </HeroWrapper>

        </OverridePageWrapper>
    )
}
export default ThankYouPage