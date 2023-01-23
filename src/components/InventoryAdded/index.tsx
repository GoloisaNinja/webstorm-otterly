import React, { ReactElement } from 'react';
import InventorySrc from '../../assets/inventory.png';
import { InventoryWrapper, Title, Image, Added, InventoryAddedDismiss } from "./styles";


interface InventoryAddedProps {
    details: string;
    dismissBtnColor: string;
    handleShow: Function;
}
const InventoryAdded = ({ details, dismissBtnColor, handleShow }: InventoryAddedProps): ReactElement => {
    return (
        <InventoryWrapper>
            <Title>inventory item added</Title>
            <Image src={InventorySrc} />
            <Added>GOT {details.toUpperCase()}!</Added>
            <InventoryAddedDismiss onClick={() => handleShow()} btnColor={dismissBtnColor}>dismiss</InventoryAddedDismiss>
        </InventoryWrapper>
    )
}
export default InventoryAdded