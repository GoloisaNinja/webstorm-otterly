import React from 'react';
import { withTheme } from "styled-components";
import {OptionsWrapper, Option} from "./styles";

interface Theme {}
interface OptionsProps {
    options: string[] | [];
    theme: Theme;
}

const GameOptions: React.FC<OptionsProps> = (props) => {
    return (
        <OptionsWrapper>
            {props.options.map((option: string, index) =>
                <Option key={`${option}-${index}`}>{option}</Option>)}
        </OptionsWrapper>
    );
}
export default withTheme(GameOptions);