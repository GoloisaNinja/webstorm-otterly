import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  background: ${props => props.theme.colors.options_highlight};
  margin-bottom: 2rem;
  > p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const Option = styled.p`
  color: ${props => props.theme.colors.options_color};
  margin-bottom: 0;
  font-size: 1.8rem;
  font-family: 'VT323', monospace;
`;
