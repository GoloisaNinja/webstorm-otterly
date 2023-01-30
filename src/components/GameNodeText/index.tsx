import React from 'react';
import {withTheme} from "styled-components";
import { Text, StatusWrapper, Status } from "./styles";

interface GameTextProps {
    nodeText: string;
    status: string;
    theme: {};
}

const GameNodeText:React.FC<GameTextProps> = (props) => {
    return(
        <>
            <StatusWrapper>
                <Status>{`Status: ${props.status}`}</Status>
            </StatusWrapper>
        <Text>
            {props.nodeText}
        </Text>
        </>
    );
}
export default withTheme(GameNodeText);