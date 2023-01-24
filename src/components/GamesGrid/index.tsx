import React from 'react';
import GameCard from '../GameCard';
import {IGame} from "../../interfaces/Node";
import {useSelector} from "react-redux";
import {gamesSelector} from "../../features/games/gamesSlice";
import {GamesWrapperGrid} from "./styles";

const GamesGrid: React.FC = () => {
    const {games} = useSelector(gamesSelector);
    return (
        <GamesWrapperGrid>
            {games.map((game: IGame) => <GameCard key={game.ID} id={game.ID} title={game.Title}
                                                  titleColor={game.TitleColor}
                                                  description={game.Description} isAvailable={game.IsAvailable}
                                                  imageSrc={game.Image}/>)}
        </GamesWrapperGrid>
    );
}
export default GamesGrid;