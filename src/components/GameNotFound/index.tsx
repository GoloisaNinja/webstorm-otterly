import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaOtter } from 'react-icons/fa';
import {GameNotFoundWrapper, MainWrapper, GameNotFoundText, BackToGamesButton} from "./styles";

const GameNotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <GameNotFoundWrapper>
            <MainWrapper>
                <GameNotFoundText><FaOtter /> Uh oh...that game not found in Otterly archives!</GameNotFoundText>
                <BackToGamesButton onClick={() => navigate("/games")}>back to safety</BackToGamesButton>
            </MainWrapper>
        </GameNotFoundWrapper>
    );
}
export default GameNotFound;