import React, { useContext } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
/* Context */
import { UserContext } from '../context/user-context'

/*loading*/
import Loading from '../common/loading'
import LoadPage from '../common/loadpage'
import Main from '../pages/Main'

const Website = Loadable({
    loader: () => import('../pages/Website'),
    loading: LoadPage
})

const About = Loadable({
    loader: () => import('../pages/About'),
    loading: LoadPage
})

const PostList = Loadable({
    loader: () => import('../components/Post/PostList'),
    loading: LoadPage
})

const PostPreview = Loadable({
    loader: () => import('../components/Post/PostPreview'),
    loading: LoadPage
})

const Home = Loadable({
    loader: () => import('../pages/home'),
    loading: Loading
})
const User = Loadable({
    loader: () => import('../pages/User'),
    loading: Loading
})
const Editor = Loadable({
    loader: () => import('../pages/Editor/index'),
    loading: Loading
})
const Posts = Loadable({
    loader: () => import('../pages/Post'),
    loading: Loading
})

const Panel = ({
    match,
    signOut
}) => {
    const { type_user } = useContext(UserContext)
    return (
        <Main signOut={signOut}>
            <Switch>
                <Route exact path={`${match.url}`} component={Home} />
                {
                    type_user !== 'P' && <Route path={`${match.url}/editor`} component={Editor} />
                }
                {
                    type_user !== 'P' && <Route path={`${match.url}/usuarios`} component={User} />
                }
                <Route path={`${match.url}/posts`} component={Posts} />
            </Switch>
        </Main>
    )
}

const Entry = ({
    auth,
    signOut,
    signIn,
    signUp
}) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={(props) => <Website {...props} signOut={signOut} />} />
                <Route path="/about" component={About} />
                <Route exact path="/posts" component={PostList} />
                <Route path="/posts/:id" component={PostPreview} />
                <Route path="/admin" component={(props) => <Panel {...props} signOut={signOut} />} />
                <Route component={() => <Redirect to='/admin' />} />
            </Switch>
        </div>
    )
}


export default Entry
