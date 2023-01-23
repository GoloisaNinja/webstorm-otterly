import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Quotes from '../../quotes/quotes';
import { PurpleSpan } from '../PurpleSpan';
import { QuoteInfo, QuoteGrid, Quote } from "../../styles/reusables";
import {
	QuotesSectionWrapper,
	QuoteIntro,
	QuoteHeader,
} from './styles';

const LandingQuotes: React.FC = () => {
	const theme = useContext(ThemeContext);
	const [quotes, setQuotes] = useState(Array<string>);
	function generateUnusedRandomIndex(): number {
		return Math.floor(Math.random() * Quotes.length);
	}
	function fillRandomQuotes(): void {
		const alreadyUsed: Array<number> = [];
		for (let i = 0; i < 3; i++) {
			let randomIndex = generateUnusedRandomIndex();
			while (alreadyUsed.includes(randomIndex)) {
				randomIndex = generateUnusedRandomIndex();
			}
			alreadyUsed.push(randomIndex);
			setQuotes((currQuotes: string[]) => [...currQuotes, Quotes[randomIndex]]);
		}
	}

	useEffect(() => {
		fillRandomQuotes();
	}, []);
	return quotes.length === 3 ? (
		<QuotesSectionWrapper theme={theme}>
			<QuoteIntro>
				<QuoteHeader>
					what are people saying about <PurpleSpan>otterly?</PurpleSpan>
				</QuoteHeader>
				<QuoteInfo>what can we say? our games have an effect on people! have a look at what real players are really saying about otterly text adventures, for reals</QuoteInfo>
			</QuoteIntro>
			<QuoteGrid>
				<Quote>{quotes[0]}</Quote>
				<Quote>{quotes[1]}</Quote>
				<Quote>{quotes[2]}</Quote>
			</QuoteGrid>
		</QuotesSectionWrapper>
	) : (
		<>loading quotes...</>
	);
};

export default LandingQuotes;
