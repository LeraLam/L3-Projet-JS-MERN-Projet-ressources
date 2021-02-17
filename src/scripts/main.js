import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from '../components/App';
import { axios } from '../plugins';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../stylesheets/index.css';

axios.setup();

const bootstrapReact =
() => ReactDOM.render(
    <Router>
        <App />
        <ToastContainer />
    </Router>,
    document.getElementById('root')
);

window.addEventListener('DOMContentLoaded', bootstrapReact );
