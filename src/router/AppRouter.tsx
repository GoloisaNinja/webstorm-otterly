import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import ScrollToTop from "../components/ScrollToTop";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage';
import GamesPage from '../pages/GamesPage';
import GameTemplate from '../pages/GameTemplate';
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ThankYouPage from "../pages/ThankYouPage/ThankYouPage";
import ErrorPage from "../pages/ErrorPage";
// Redux ToolKit
import { useSelector, useDispatch } from "react-redux";
import { addGame, gamesSelector } from "../features/games/gamesSlice";

import oneWayOrTheOtter from '../games/oneWayOrTheOtter';


const AppRouter: React.FC = () => {
	const dispatch = useDispatch();
	const { games } = useSelector(gamesSelector);
	useEffect(() => {
		dispatch(addGame(oneWayOrTheOtter))
	},[])
	return (
		<Router>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<NavBar />
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/games' element={<GamesPage />} />
					<Route path='/games/:id' element={<GameTemplate />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path="/thank-you" element={<ThankYouPage />} />
					<Route path="/error-page" element={<ErrorPage />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};
export default AppRouter;
