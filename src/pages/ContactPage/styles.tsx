import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  > p {
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 1rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > label {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.light_purple}; 
  }
  > input, textarea {
    border: 2px solid #eee;
    border-radius: 3px;
    background-color: #eee;
    font-size: 1.8rem;
    padding: 1rem;
    margin-bottom: 1rem;
    &:focus {
      border: 2px solid ${props => props.theme.light_purple}
    }
  }
  > p {
    align-self: flex-end;
    font-size: 1.8rem;
    color: ${props => props.theme.light_purple};
    margin-bottom: 3rem;
  }
  > button {
    opacity: .5;
    cursor: not-allowed;
    pointer-events: none;
    &.isActive {
      opacity: 1;
      cursor: pointer;
      pointer-events: all;
    }
  }
`;