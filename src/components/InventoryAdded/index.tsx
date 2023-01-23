import React, { ReactElement } from 'react';
import InventorySrc from '../../assets/inventory.png';
import { InventoryWrapper, Title, Image, Added } from "./styles";


interface InventoryAddedProps {
    details: string;
}
const InventoryAdded = ({ details }: InventoryAddedProps): ReactElement => {
    return (
        <InventoryWrapper>
            <Title>inventory item added</Title>
            <Image src={InventorySrc} />
            <Added>got {details}!</Added>
        </InventoryWrapper>
    )
}
export default InventoryAdded