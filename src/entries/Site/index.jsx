import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

/*loading*/
// import Loading from '../common/loading';
import NoMatch from '../../common/notmatch';

// const Home = Loadable({
//   loader: () => import('../pages/home'),
//   loading: Loading
// });

const Home = () => <div>Site</div>
const SignIn = () => <div>SignIn</div>
const SignUp = () => <div>SignUp</div>

const Site = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ingreso" component={SignIn} />
      <Route path="/registro" component={SignUp} />
      <Route component={NoMatch} />
    </Switch>
  )
}


export default Site;