import React from 'react';
import GameCard from '../GameCard';
import { IGame } from "../../interfaces/Node";
import GameLibrary from "../../gameLibrary";
import { GamesWrapperGrid} from "./styles";

const GamesGrid: React.FC = () => {
    const games: IGame[] = GameLibrary.Games;
    return (
        <GamesWrapperGrid>
            {games.map((game) => <GameCard key={game.ID} id={game.ID} title={game.Title} description={game.Description} imageSrc={game.Image} />)}
        </GamesWrapperGrid>
    );
}
export default GamesGrid;