import React from 'react';
import {withTheme} from "styled-components";
import { Text, Status } from "./styles";

interface Theme {}
interface GameTextProps {
    nodeText: string;
    status: string;
    theme: Theme;
}

const GameNodeText:React.FC<GameTextProps> = (props) => {
    return(
        <>
            <Status>{`Status: ${props.status}`}</Status>
        <Text>
            {props.nodeText}
        </Text>
        </>
    );
}
export default withTheme(GameNodeText);