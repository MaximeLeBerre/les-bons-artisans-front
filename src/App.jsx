import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItem from './components/ListItems';
import ItemDetails from './components/ItemDetails';
import Navbar from './components/Navbar';
import ButtonAdd from './components/Button';
import FormItem from './components/FormItem';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ButtonAdd />
        <Switch>
          <Route exact path="/">
            <ListItem />
          </Route>
          <Route path="/details/:id">
            <ItemDetails />
          </Route>
          <Route path="/form/post">
            <FormItem />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
