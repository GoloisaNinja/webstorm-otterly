import { IGameLibrary } from '../interfaces/Node';

const GameLibrary: IGameLibrary = {
	Games: [],
	getGameById(n: number) {
		const gameIndex = this.Games.findIndex((game) => game.ID === n);
		if (gameIndex !== -1) {
			return this.Games[gameIndex];
		}
		return {
			ID: -99,
			Title: '',
			Image: "",
			Description: "",
			Nodes: [],
			getNodeById(n: number) {
				return {
					ID: -99,
					Text: '',
					NodeOptions: [],
					EarnedPoints: -99,
				};
			},
		};
	},
};

export default GameLibrary;
