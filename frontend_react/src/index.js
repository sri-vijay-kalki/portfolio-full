import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MESUREMENT_ID);
ReactGA.send({ hitType: "pageview", page: window.location.pathname});
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);