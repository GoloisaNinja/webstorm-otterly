import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {ThemeContext} from "styled-components";
import {GameCardWrapper, GameImage, GameTextWrapper, GameTitle, GameDescription} from "./styles";

interface GameCardProps {
    id: number;
    title: string;
    description: string;
    imageSrc: string
}
const GameCard: React.FC<GameCardProps> = (props) => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate();
    return (
        <GameCardWrapper onClick={() => navigate(`/games/${props.id}`)}>
            <GameImage src={props.imageSrc} />
            <GameTextWrapper>
                <GameTitle color={theme.main_purple}>{props.title}</GameTitle>
                <GameDescription>{props.description}</GameDescription>
            </GameTextWrapper>
        </GameCardWrapper>
    )
}
export default GameCard;