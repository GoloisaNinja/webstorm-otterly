import {IOptions, INode} from "../interfaces/Node";
import {CommandOption} from "../features/games/gamesSlice";

interface InputCheckProps {
    userInput: string;
    node: INode;
    validCO: CommandOption[];
}

type UserInputCheck = {
    goodInput: boolean,
    selectedOption: IOptions | null,
    optionIsNullNextNode: number | null,
}

export function InputCheck({ userInput, node, validCO }: InputCheckProps): UserInputCheck {
    let command = userInput.toLowerCase().trim();
    const defaultBadInput: UserInputCheck = {
        goodInput: false,
        selectedOption: null,
        optionIsNullNextNode: null,
    }
    const goodInputDynamic: UserInputCheck = {
        goodInput: true,
        selectedOption: null,
        optionIsNullNextNode: null,
    }
    if (node.CodeNode) {
        if (command.length !== node.CodeLength) {
            return defaultBadInput
        } else {
            if (command === validCO[0].command) {
                goodInputDynamic.selectedOption = node.NodeOptions[validCO[0].pos]
                return goodInputDynamic
            } else {
                goodInputDynamic.optionIsNullNextNode = node.CodeFailedNextNode
                return goodInputDynamic
            }
        }
    }
    for (let i = 0; i < validCO.length; i++) {
        if (validCO[i].command === command) {
            goodInputDynamic.selectedOption = node.NodeOptions[validCO[i].pos]
            return goodInputDynamic
        }
    }
    return defaultBadInput
}