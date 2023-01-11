import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Quotes from '../../quotes/quotes';
import { PurpleSpan } from '../PurpleSpan';
import {
	QuotesSectionWrapper,
	QuoteSectionIntro,
	QuoteGrid,
	Quote,
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
		<QuotesSectionWrapper>
			<QuoteSectionIntro color={theme.main_purple}>
				what are people saying about <PurpleSpan>otterly?</PurpleSpan>
			</QuoteSectionIntro>
			<QuoteGrid>
				<Quote color={theme.main_purple}>{quotes[0]}</Quote>
				<Quote color={theme.main_purple}>{quotes[1]}</Quote>
				<Quote color={theme.main_purple}>{quotes[2]}</Quote>
			</QuoteGrid>
		</QuotesSectionWrapper>
	) : (
		<>loading quotes...</>
	);
};

export default LandingQuotes;
