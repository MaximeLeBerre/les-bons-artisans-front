import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListItem from './components/ListItems';
import ItemDetails from './components/ItemDetails';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <ListItem />
          </Route>
          <Route path='/details/:id'>
            <ItemDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
