import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import MainSite from '../../pages/Main/site'

/*loading*/
import Loading from '../../common/loading';

const SignIn = Loadable({
  loader: () => import('../../pages/Sign'),
  loading: Loading
});

const SignUp = Loadable({
  loader: () => import('../../pages/Sign/Up'),
  loading: Loading
});

const Website = Loadable({
  loader: () => import('../../pages/Website'),
  loading: Loading
});

const PostList = Loadable({
  loader: () => import('../../components/Post/PostList'),
  loading: Loading
});

const PostPreview = Loadable({
  loader: () => import('../../components/Post/PostPreview'),
  loading: Loading
});

const Site = ({
  signOut,
  signIn,
  signUp
}) => {
  return (
    <MainSite signOut={signOut}>
      <Switch>
        <Route exact path="/" component={Website} />
        <Route path="/login" component={(props)=> <SignIn {...props} signIn={ signIn } />} />
        <Route path="/registrar" component={(props)=> <SignUp {...props} signUp={signUp}/>} />
        <Route exact path="/posts" component={PostList} />
        <Route path="/posts/:id" component={PostPreview} />
        <Route component={()=><Redirect to='/' />} />
      </Switch>
    </MainSite>
  )
}


export default Site;