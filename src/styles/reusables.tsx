import styled from 'styled-components';
import {PageWrapper} from "../components/PageWrapper";

export const OverridePageWrapper = styled(PageWrapper)`
  @media (max-width: 450px) {
    padding-top: ${(props) => props.padding};
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
export const HeroWrapper = styled.div`
  padding-bottom: 5rem;
  line-height: 1;
  width: 100%;
`;
export const HeroText = styled.h1`
    font-size: 6rem;
    padding-top: 3rem;
    color: #fff;
    line-height: 1.2;
    font-weight: 800;
    @media (min-width: 1000px) {
      font-size: 8rem;
    }
`;
export const HeroSubText = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 1.2;
  color: #ccc;
  margin-top: 2rem;
`;