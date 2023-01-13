import styled from 'styled-components';
import {PageWrapper} from "../../components/PageWrapper";

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
export const GamesPageHeroText = styled.h1`
    font-size: 6rem;
    padding-top: 3rem;
    color: #fff;
    line-height: 1.2;
    font-weight: 800;
    @media (min-width: 1000px) {
      font-size: 8rem;
    }
`;
export const GamesPageHeroSubText = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.0;
  color: #eee;
  margin-top: 2rem;
`;