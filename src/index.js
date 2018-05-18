import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store, { history } from './store';
import './assets/css/index.css';
import { getSiteId } from './utils/storage';
import { SET_SITE_ID } from './constants/types';

const siteId = getSiteId();
if (siteId) store.dispatch({ type: SET_SITE_ID, payload: siteId });

ReactDOM.render(
  <Routes store={store} history={history} />,
  document.getElementById('root')
);
