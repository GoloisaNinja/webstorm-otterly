import React from 'react'
import {SpinnerOverlay, SpinnerWrapper} from "./styles";

interface SpinnerProps {
    show: boolean;
    color: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
    return (
        props.show ? (
        <>
            <SpinnerWrapper color={props.color}></SpinnerWrapper>
            <SpinnerOverlay></SpinnerOverlay>
        </>
        ): (<></>)
    );
}
export default Spinner;