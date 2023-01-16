import styled, {keyframes} from 'styled-components';

const typing = keyframes`
	from {width: 0}
	to {width: 100%}
`;

export const GameLoadScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: .75;
  padding-top: 3rem;
  min-height: 250px;
  @media (max-width: 449px) {
    padding-bottom: 3rem;
  }
  > p {
    overflow: hidden;
    white-space: nowrap;
    font-size: 1.8rem;
    color: ${props => props.theme.colors.loading_screen_text};
    font-family: 'VT323', monospace;
    font-weight: 800;
    animation: ${typing} 2s steps(75, end);
  }
`;