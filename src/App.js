import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import { GlobalStyles } from './styles/GlobalStyles';
import Resume from './containers/Resume';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </BrowserRouter>
  );
};
