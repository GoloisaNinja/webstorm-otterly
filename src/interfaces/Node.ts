interface ILevelRequirements {
	Mood: string | null;
	Inventory: string[] | [];
}
export interface IOptions {
	ID: string;
	Text: string;
	Command: string;
	Mood: string;
	Requires: ILevelRequirements;
	Inventory: string;
	NextNode: number;
	StoryArc?: string;
	PlayType?: string;
	DeathNode?: boolean;
	AfterAction?: boolean;
}
export interface INode {
	ID: number;
	Text: string;
	CodeNode: boolean;
	CodeLength: number;
	CodeFailedNextNode: number;
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

