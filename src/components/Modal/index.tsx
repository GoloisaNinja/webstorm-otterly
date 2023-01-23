import React, {ReactElement, ReactNode} from 'react'
import {withTheme} from "styled-components";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
    childComponent: React.ReactNode
    theme: {
        button_purple: string;
        main_purple: string;
    }
}
const Modal = ({ childComponent, theme }: ModalProps): ReactElement => {

    return (
        <>
            <ModalContainer>
                {childComponent}
            </ModalContainer>
            <Overlay></Overlay>
        </>
    )
}
export default withTheme(Modal)