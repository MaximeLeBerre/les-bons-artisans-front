import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItem from './components/ListItems';
import ItemDetails from './components/ItemDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ListItem />
          </Route>
          <Route path="/details/:id">
            <ItemDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
