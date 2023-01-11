import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';

import oneWayOrTheOtter from './games/oneWayOrTheOtter';
import GameLibrary from './gameLibrary';
GameLibrary.Games.push(oneWayOrTheOtter);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<AppRouter />);
