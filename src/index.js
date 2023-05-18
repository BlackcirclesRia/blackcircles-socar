
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from "./utility/theme";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={DefaultTheme} >
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
reportWebVitals();