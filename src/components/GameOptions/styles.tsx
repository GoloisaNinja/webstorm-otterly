import styled from 'styled-components';
import {TypewriterStylePTag} from "../TypewriterStyledPTag";

export const OptionsWrapper = styled.div`
  background: ${props => props.theme.colors.options_highlight};
  > p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const Option = styled(TypewriterStylePTag)`
  color: ${props => props.theme.colors.options_color};
  margin-bottom: 0;
`;