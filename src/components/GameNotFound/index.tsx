import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaOtter } from 'react-icons/fa';
import {Button} from "../Button";
import {PurpleSpan} from "../PurpleSpan";
import {GameNotFoundWrapper, GameNotFoundText} from "./styles";

const GameNotFound: React.FC = () => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate();
    return (
        <GameNotFoundWrapper>
            <GameNotFoundText><FaOtter /> Uh oh...that game not found in <PurpleSpan>Otterly</PurpleSpan> archives!</GameNotFoundText>
            <Button onClick={() => navigate("/games")} color={theme.console_green}>back to safety</Button>
        </GameNotFoundWrapper>
    );
}
export default GameNotFound;