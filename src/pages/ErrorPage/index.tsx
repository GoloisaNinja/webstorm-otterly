import React from 'react';
import {HeroText, HeroSubText, HeroWrapper, OverridePageWrapper} from "../../styles/reusables";
import { useNavigate } from "react-router-dom";
import {PurpleSpan} from "../../components/PurpleSpan";
import { OverrideButton } from "./styles";

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <OverridePageWrapper padding={"1rem"}>
            <HeroWrapper>
                <HeroText>We <PurpleSpan>Otterly</PurpleSpan> Apologize!</HeroText>
                <HeroSubText>
                    Looks like we ran into a problem trying to process your form submission!
                    We are really sorry about that! We don't like to lay blame around, but if
                    we're being honest, it was probably freaking Jeff. That guy. Is. The Worst.
                    Don't worry, we'll deal with Jeff. Please try and submit your form a little later, and
                    please accept our humblest apologies for how awful Jeff is.
                </HeroSubText>
                <OverrideButton color={'#b907eb'} onClick={() => navigate("/")}>Return Home</OverrideButton>
            </HeroWrapper>
        </OverridePageWrapper>
    )
}
export default ErrorPage