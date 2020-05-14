import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux'
// import store from './store/index'
import { MainView } from './vews/main';
// import { FilmDetails } from './components/filmDetails';


function App() {
  return (
    // <Provider store={store}>
      <HashRouter basename="/filmsList">
        <Switch>
          <Route exect path='/chucknorris' component={MainView} />
          {/* <Route path='/movieDetales/:id' component={FilmDetails} /> */}
          <Redirect to="/chucknorris" />
        </Switch>
      </HashRouter>
    // </Provider>
  );
}

export default App;
