import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';

import Menu from './pages/Menu/Menu';

import MenuTemplate from './templates/MenuTemplate/MenuTemplate';

import {createBrowserHistory} from 'history'

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <MenuTemplate exact path="/" component={Menu}/>
      </Switch>
    </Router>
  );
}

export default App;
