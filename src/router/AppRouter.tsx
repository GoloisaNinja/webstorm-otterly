import React from 'react';
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

const AppRouter: React.FC = () => {
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
				</Routes>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};
export default AppRouter;
