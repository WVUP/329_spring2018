import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import TwitchApp from './components/TwitchApp';

import '../styles/styles.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';


ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="*" component={TwitchApp}/>
    </div>
  </HashRouter>,
  document.getElementById('react-container'));
