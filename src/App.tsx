import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import BaseLayout from './layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/base' component={ BaseLayout } />
          <Redirect to='/base' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
