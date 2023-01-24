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
	Inventory: string;
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
	TitleColor: string;
	Image: string;
	Description: string;
	IsAvailable: boolean;
	Nodes: INode[];
}

