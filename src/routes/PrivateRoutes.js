import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Loadable } from "react-loadable";

import Loading from '../components/loading/Loading';

// Components
// const Home = Loadable({ loader: () => import('../pages/Home'), loading: Loading });

export default routes => {
  return (
    <Switch>
      <Route></Route>
    </Switch>
  )
}
