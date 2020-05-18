import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MainView } from './vews/main';



function App() {
  return ( 
      <HashRouter basename="/chucknorris">
        <Switch>
          <Route exect path='/chucknorris' component={MainView} />         
          <Redirect to="/chucknorris" />
        </Switch>
      </HashRouter>    
  );
}

export default App;
