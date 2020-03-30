import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import MainSite from '../../pages/Main/site'

/*loading*/
import LoadPage from '../../common/loadpage'

const SignIn = Loadable({
  loader: () => import('../../pages/Sign'),
  loading: LoadPage
})

const SignUp = Loadable({
  loader: () => import('../../pages/Sign/Up'),
  loading: LoadPage
})

const Website = Loadable({
  loader: () => import('../../pages/Website'),
  loading: LoadPage
})

const About = Loadable({
  loader: () => import('../../pages/About'),
  loading: LoadPage
})

const PostList = Loadable({
  loader: () => import('../../components/Post/PostList'),
  loading: LoadPage
})

const PostPreview = Loadable({
  loader: () => import('../../components/Post/PostPreview'),
  loading: LoadPage
})

const Info = Loadable({
  loader: () => import('../../pages/Website/Info'),
  loading: LoadPage
})

const Site = ({
  signOut,
  signIn,
  signUp
}) => {
  return (
    <MainSite signOut={signOut}>
      <Switch>
        <Route exact path="/" component={Website} />
        <Route path="/info" component={Info} />
        <Route path="/login" component={(props)=> <SignIn {...props} signIn={ signIn } />} />
        <Route path="/registrar" component={(props)=> <SignUp {...props} signUp={signUp}/>} />
        <Route path="/about" component={About} />
        <Route exact path="/posts" component={PostList} />
        <Route path="/posts/:id" component={PostPreview} />
        <Route component={()=><Redirect to='/' />} />
      </Switch>
    </MainSite>
  )
}


export default Site;