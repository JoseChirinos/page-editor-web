import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

/*loading*/
import Loading from '../common/loading';
import NoMatch from '../common/notmatch';

const Home = Loadable({
  loader: () => import('../pages/home'),
  loading: Loading
});

const User = Loadable({
  loader: () => import('../pages/user'),
  loading: Loading
});

const Crop = Loadable({
  loader: () => import('../pages/crop'),
  loading: Loading
});

const RouterList = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/usuarios" component={User} />
      <Route path="/crop" component={Crop} />
      <Route component={NoMatch} />
    </Switch>
  )
}


export default RouterList;