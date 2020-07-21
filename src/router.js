import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import SecurityMeasures from './pages/SecurityMeasures';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/security" component={SecurityMeasures} />
      </Switch>
    </BrowserRouter>
  );
}
