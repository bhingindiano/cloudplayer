import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config';
import './index.css';

SC.initialize({
    client_id: config.soundcloud.client_id
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
