import styled from 'styled-components';
import {PageWrapper} from "../components/PageWrapper";

interface Props {
    marginTop: string;
    marginBottom: string;
}

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
export const HeroInfoHeader = styled.h3`
  font-size: 4rem;
  line-height: 1.2;
  color: #eee; 
  margin-bottom: 2rem;
  @media (min-width: 1000px) {
    font-size: 6rem;
  }
`;
export const HeroInfo = styled.p`
	font-size: 2.6rem;
    font-weight: 500;
    color: #ccc;
    line-height: 1.2;
`;
export const OtterImg = styled.img`
	width: 25rem;
	margin-right: 1.2rem;
	@media (max-width: 400px) {
		width: 20rem;
	}
`;
export const BasicFlexCWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom}
`;

export const QuoteInfo = styled.p`
	font-size: 2.6rem;
    font-weight: 500;
    color: #ccc;
    line-height: 1.2;
`;
export const QuoteGrid = styled.div`
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 2rem 0;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 3.5rem;
	}
`;
export const Quote = styled.p`
	font-size: 1.6rem;
	font-weight: 700;
	font-style: italic;
	padding: 5rem 2rem;
	color: black;
	background-color: #ddd;
	border-radius: 5px;
	line-height: 1.3;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: all 0.4s ease-in-out;
	&:hover {
        background-color: ${props => props.theme.main_purple};
        color: #fff;
		transform: scale(1.03);
	}
	@media (min-width: 1000px) {
		font-size: 2rem;
	}
`;