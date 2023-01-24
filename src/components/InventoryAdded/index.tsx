import React, { ReactElement } from 'react';
import {withTheme} from "styled-components";
import InventorySrc from '../../assets/inventory.png';
import { InventoryWrapper, Title, Image, Added, InventoryAddedDismiss } from "./styles";


interface InventoryAddedProps {
    details: string;
    handleShow: Function;
    theme: {};
}
const InventoryAdded = ({ details, handleShow }: InventoryAddedProps): ReactElement => {
    return (
        <InventoryWrapper>
            <Title>inventory item added</Title>
            <Image src={InventorySrc} />
            <Added>GOT {details.toUpperCase()}!</Added>
            <InventoryAddedDismiss onClick={() => handleShow()}>dismiss</InventoryAddedDismiss>
        </InventoryWrapper>
    )
}
export default withTheme(InventoryAdded)