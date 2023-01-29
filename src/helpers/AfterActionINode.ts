import {IGame, INode} from "../interfaces/Node";
import {AfterActionState, PlayType} from "../features/games/gamesSlice";
import {GetRandomOtterFact} from "./OtterFacts";

interface BuildAfterActionProps {
    game: IGame;
    afterAction: AfterActionState;
    points: number;
}
export function BuildAfterActionINode({ game, afterAction, points }: BuildAfterActionProps): INode {
    let dominantPlayType = "";
    let playCount = 0;
    for (let playType of Object.keys(afterAction.dominantPlayType)) {
        if (afterAction.dominantPlayType[playType as keyof PlayType] > playCount) {
            playCount = afterAction.dominantPlayType[playType as keyof PlayType]
            dominantPlayType = playType as string;
        }
    }
    const otterFact = GetRandomOtterFact()
    const normalizedPlayType = dominantPlayType !== undefined ? dominantPlayType : "undetermined..."
    const normalizedStoryArc = afterAction.selectedStoryArc.length ? afterAction.selectedStoryArc : "undetermined..."
    const afterActionText =
        `****AFTER ACTION REPORT****
            
        
            GAME PLAYED: ${game.Title}
        
            NODES COMPLETED: ${afterAction.nodesCompleted} / ${game.Nodes.length}
        
            SELECTED STORY ARC: ${normalizedStoryArc}
        
            DOMINANT PLAY TYPE: ${normalizedPlayType}
        
            SURVIVED ENCOUNTER: ${!afterAction.died}
        
            TOTAL POINTS EARNED: ${points}
            
            DID YOU KNOW?:
            ${otterFact}
        
        
            ****THANK YOU FOR PLAYING****`
    return {
        ID: 9999,
        Text: afterActionText,
        CodeNode: false,
        CodeLength: 0,
        CodeFailedNextNode: 0,
        NodeOptions: [{
            ID: "9999a",
            Text: `Type "s" to Start Over`,
            Command: "s",
            Mood: "",
            Requires: {Mood: null, Inventory: []},
            Inventory: "",
            NextNode: 1,
        }],
        EarnedPoints: 0,
    }
}