interface ILevelRequirements {
	Mood: string | null;
	Inventory: string[] | [];
}
export interface IOptions {
	ID: string;
	Text: string;
	Command: string;
	Mood: string | null;
	Requires: ILevelRequirements;
	NextNode: number;
}
export interface INode {
	ID: number;
	Text: string;
	NodeOptions: IOptions[];
	EarnedPoints: number;
}
export interface IGame {
	ID: number;
	Title: string;
	Image: string;
	Description: string;
	Nodes: INode[];
	getNodeById(n: number): INode;
}
export interface IGameLibrary {
	Games: IGame[];
	getGameById(n: number): IGame;
}
