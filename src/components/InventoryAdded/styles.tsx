import styled from 'styled-components'
import {fadeIn} from "../../styles/animations";
import {TypewriterStylePTag} from "../TypewriterStyledPTag";

export const Image = styled.img`
  grid-area: pic;
  width: 120px;
  //transform: rotate(45deg);
  padding: 1rem;
  @media (max-width: 465px) {
    width: 100px;
  }
  @media (max-width: 400px) {
    width: 90px;
  }
  @media (max-width: 365px) {
    width: 75px;
  }
`;
export const InventoryWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  min-height: 150px;
  grid-template-areas: "title pic"
        "added pic"
        "btn btn";
`;
export const Title = styled(TypewriterStylePTag)`
  grid-area: title;
  font-family: 'VT323', monospace;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text_color};
  margin-bottom: 0;
  align-self: flex-end;
  animation-duration: 1s;
  @media (max-width: 465px) {
    font-size: 2.6rem;
  }
  @media (max-width: 350px) {
    font-size: 2.4rem;
  }
`;

export const Added = styled.p`
  grid-area: added;
  font-family: 'VT323', monospace;
  font-size: 2.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text_color};
  align-self: center;
  animation: ${fadeIn} .5s ease;
  animation-delay: 1s;
  animation-fill-mode: backwards;
  @media (max-width: 465px) {
    font-size: 2.6rem;
  }
`;
export const InventoryAddedDismiss = styled.button`
  grid-area: btn;
  background-color: ${(props) => props.theme.colors.modal_dismiss_btn};
  font-family: 'VT323', monospace;
  font-size: 2.4rem;
  border: none;
  padding: 1.2rem;
  margin-top: 2.4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.modal_dismiss_text_color};
`