import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import {InputWrapper, StyledInput, TerminalSpan} from "./styles";
interface InputProps {
    handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleUserInput(): void;
    userInput: string;
}
const GameNodeInput:React.FC<InputProps> = (props) => {
    const theme = useContext(ThemeContext)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        props.handleInputChange(e);
    }
    return (
        <InputWrapper>
            <TerminalSpan color={theme.console_green}>{`command `}</TerminalSpan>
            <StyledInput
                color={theme.console_green}
                autoFocus
                value={props.userInput}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) =>
                    e.key === 'Enter' && props.handleUserInput()
                }></StyledInput>
        </InputWrapper>

    );
}
export default GameNodeInput;