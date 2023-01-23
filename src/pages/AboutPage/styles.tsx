import styled from 'styled-components'
import { Button} from "../../components/Button";

export const OverrideButton = styled(Button)`
  margin-top: 6rem;
  @media (min-width: 450px) {
    max-width: 300px;
  }
`;