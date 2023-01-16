import styled from 'styled-components';
import {TypewriterStylePTag} from "../TypewriterStyledPTag";

export const OptionsWrapper = styled.div`
  background: ${props => props.theme.colors.options_highlight};
`;
export const Option = styled(TypewriterStylePTag)`
  color: ${props => props.theme.colors.options_color};
`;