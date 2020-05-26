import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import { AppMainContainer } from './App.styled';
import { TopBar } from './components/nav/TopBar';
import routes from './constants/routes.json';
import { SettingsPage } from './page/SettingsPage';
import { TodosPage } from './page/TodosPage';

const App = () => {
  return (
    <div>
      <TopBar />
      <AppMainContainer>
        <Switch>
          <Route path={routes.SETTINGS} component={SettingsPage} />
          <Route path={routes.HOME} component={TodosPage} />
        </Switch>
      </AppMainContainer>
    </div>
  );
};

export default hot(App);
