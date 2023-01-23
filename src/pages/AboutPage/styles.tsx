import styled from 'styled-components'
import { Button} from "../../components/Button";

export const OtterWrapper = styled.div`
  display: grid;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 6rem;
  grid-template-areas: 
          "otter header"
          "info info";
  > img {
    grid-area: otter;
  }
  > h3 {
    grid-area: header;
  }
  > p {
    grid-area: info;
  }
  @media (min-width: 650px) {
    grid-template-areas: 
            "otter header"
            "otter info";
  }
`;
export const OverrideButton = styled(Button)`
  margin-top: 6rem;
  @media (min-width: 450px) {
    max-width: 300px;
  }
`;