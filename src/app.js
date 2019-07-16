import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is helppage component
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <a href="/">Go home</a>
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));