import React from 'react';
import { useNavigate } from "react-router-dom";
import {GameCardWrapper, GameImage, GameTextWrapper, GameTitle, GameDescription} from "./styles";

interface GameCardProps {
    id: number;
    title: string;
    titleColor: string;
    description: string;
    imageSrc: string;
    isAvailable: boolean;
}
const GameCard: React.FC<GameCardProps> = (props) => {
    const navigate = useNavigate();
    return (
        <GameCardWrapper tabIndex={0}
                         opacity={props.isAvailable ? 1 : .3}
                         onClick={() => props.isAvailable && navigate(`/games/${props.id}`)}
                         onKeyDown={(e) => (props.isAvailable && e.key === "Enter") && navigate(`/games/${props.id}`)}
        >
            <GameImage src={props.imageSrc} />
            <GameTextWrapper>
                <GameTitle color={props.titleColor}>{props.title}</GameTitle>
                <GameDescription>{props.description}</GameDescription>
            </GameTextWrapper>
        </GameCardWrapper>
    )
}
export default GameCard;