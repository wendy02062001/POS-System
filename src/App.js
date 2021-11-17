import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import {createBrowserHistory} from 'history'

import Menu from './pages/Menu/Menu';
import Payment from './pages/Payment/Payment';

import MenuTemplate from './templates/MenuTemplate/MenuTemplate';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <MenuTemplate exact path="/" component={Menu}/>
        <MenuTemplate exact path="/payment" component={Payment}/>
      </Switch>
    </Router>
  );
}

export default App;
