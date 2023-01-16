import React, {useContext} from 'react'
import {ThemeContext} from "styled-components";
import { StyledSpan } from './styles'
interface Props {
    children: React.ReactNode
}
export const PurpleSpan: React.FC<Props> = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <StyledSpan color={theme.light_purple}>{props.children}</StyledSpan>
    );
}
