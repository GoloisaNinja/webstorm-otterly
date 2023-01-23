import styled from 'styled-components'
import { Button} from "../../components/Button";

export const OtterWrapper = styled.div`
  display: grid;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
  grid-template-areas: 
          "otter header"
          "otter info";
  > img {
    grid-area: otter;
    
    @media (max-width: 600px) {
      justify-self: center;
    }
  }
  > h3 {
    grid-area: header;
  }
  > p {
    grid-area: info;
  }
  @media (max-width: 600px) {
    grid-template-areas: 
            "otter otter"
            "header header"
            "info info";
  }
`;
export const OverrideButton = styled(Button)`
  margin-top: 6rem;
  @media (min-width: 450px) {
    max-width: 300px;
  }
`;