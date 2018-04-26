import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import TwitchApp from './components/TwitchApp';

import '../styles/styles.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <TwitchApp/>,
    </div>
  </BrowserRouter>,
  document.getElementById('react-container'));
