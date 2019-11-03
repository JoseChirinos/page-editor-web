import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';

/*loading*/
import Loading from '../../common/loading';

const SignIn = Loadable({
  loader: () => import('../../pages/Sign'),
  loading: Loading
});

const Website = Loadable({
  loader: () => import('../../pages/Website'),
  loading: Loading
});

const SignUp = () => <div>SignUp</div>

const Site = ({
  signIn
}) => {
  return (
    <Switch>
      <Route exact path="/" component={Website} />
      <Route path="/login" component={(props)=> <SignIn {...props} signIn={ signIn } />} />
      <Route path="/registrar" component={SignUp} />
      <Route component={()=><Redirect to='/' />} />
    </Switch>
  )
}


export default Site;