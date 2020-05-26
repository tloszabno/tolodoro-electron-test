import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore, history } from './store/config/configureStore';
import './app.global.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import routes from './constants/routes.json';
import { ipcRenderer } from 'electron';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  const app = (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  );
  render(app, document.getElementById('root'));
});

ipcRenderer.on('goto.settings', () => {
  history.push(routes.SETTINGS)
});
