import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
// route
import Home from './core/Home';
import Menu from './core/Menu';
import Corona from './components/corona';

const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route path="/corona" component={Corona} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default MainRouter;

//any route contain / go to Home component
//that's why put it at the last
