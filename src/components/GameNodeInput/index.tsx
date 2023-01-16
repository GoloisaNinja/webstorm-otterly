import React from 'react';
import {withTheme} from "styled-components";
import {InputWrapper, StyledInput, TerminalSpan} from "./styles";
interface Theme {}
interface InputProps {
    handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleUserInput(): void;
    userInput: string;
    theme: Theme;
}
const GameNodeInput:React.FC<InputProps> = (props) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        props.handleInputChange(e);
    }
    return (
        <InputWrapper>
            <TerminalSpan>{`command `}</TerminalSpan>
            <StyledInput
                autoFocus
                value={props.userInput}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) =>
                    e.key === 'Enter' && props.handleUserInput()
                }></StyledInput>
        </InputWrapper>

    );
}
export default withTheme(GameNodeInput);