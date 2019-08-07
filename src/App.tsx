import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import MainLayout from './layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/main' component={ MainLayout } />
          <Redirect to='/main' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
