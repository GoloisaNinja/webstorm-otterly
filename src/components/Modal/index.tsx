import React, {ReactElement} from 'react'
import {withTheme} from "styled-components";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
    childComponent: React.ReactNode;
    theme: {};
}
const Modal = ({ childComponent }: ModalProps): ReactElement => {
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