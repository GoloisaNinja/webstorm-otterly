import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {gamesSelector, setValidCO, CommandOption} from "../../features/games/gamesSlice";
import {withTheme} from "styled-components";
import {OptionsWrapper, Option} from "./styles";
import {IOptions} from "../../interfaces/Node";
import TypeWriter from "../../helpers/TypeWriter";
interface Theme {
}

interface OptionsProps {
    options: IOptions[];
    theme: Theme;
}

const GameOptions: React.FC<OptionsProps> = (props) => {
    const dispatch = useDispatch();
    const {mood, inventory, validCO} = useSelector(gamesSelector)
    const assessValidOptions = useCallback((): void => {
        const validArray: CommandOption[] = [];
        props.options.forEach((option) => {
            const {Mood, Inventory} = option.Requires;
            if (Mood !== null && Mood !== mood) {
                return;
            }
            let valid = true;
            Inventory.forEach((item) => {
                if (!inventory.includes(item)) {
                    valid = false;
                }
            })
            if (valid) {
                validArray.push({command: option.Command, optionString: option.Text})
            }
        })
        dispatch(setValidCO(validArray));
    }, [props.options])

    useEffect(() => {
        assessValidOptions()
    }, [assessValidOptions])

    useEffect(() => {
        if (document !== undefined) {
            let optionEls: NodeList = document.querySelectorAll(".option")!
            optionEls.forEach((el) => {
                let castHtml = el as HTMLElement
               let str = el.childNodes[0].nodeValue!
                TypeWriter(str, castHtml)
            })
        }
    },[validCO])

    return validCO !== null ? (
        <OptionsWrapper>
            {validCO.map((obj: CommandOption, index: number) => <Option
                className={"option"} key={`${obj.command}-{index}`}>{obj.optionString}</Option>)}
        </OptionsWrapper>
    ) : (<OptionsWrapper>loading...</OptionsWrapper>);
}
export default withTheme(GameOptions);