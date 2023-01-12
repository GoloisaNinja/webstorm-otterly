import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import { Text, Status } from "./styles";

interface GameTextProps {
    nodeText: string;
    status: string;
}

const GameNodeText:React.FC<GameTextProps> = (props) => {
    const theme = useContext(ThemeContext)
    return(
        <>
            <Status color={theme.console_green}>{`Status: ${props.status}`}</Status>
        <Text>
            {props.nodeText}
        </Text>
        </>
    );
}
export default GameNodeText;