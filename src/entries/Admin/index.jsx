import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

/*loading*/
import Loading from '../../common/loading';
import NoMatch from '../../common/notmatch';
import Main from '../../pages/Main'

// const Home = Loadable({
//   loader: () => import('../pages/home'),
//   loading: Loading
// });
const Site = ()=><div>Site</div>

const Home = Loadable({
  loader: () => import('../../pages/home'),
  loading: Loading
});
const User = Loadable({
  loader: () => import('../../pages/User'),
  loading: Loading
});
const Crop = Loadable({
  loader: () => import('../../pages/crop'),
  loading: Loading
});

const Panel = ({match})=> <div>
    <Main signOut={ (e)=>console.log('salir') }>
        <Switch>
            <Route exact path={`${match.url}`} component={Home}/>
            <Route exact path={`${match.url}/usuarios`} component={User}/>
            <Route exact path={`${match.url}/crop`} component={Crop} />
        </Switch>
    </Main>
</div>

const Admin = (props) => {
  return (
      <div>
        <Switch>
            <Route exact path="/" component={Site} />
            <Route path="/admin" component={Panel}/>
            <Route component={NoMatch} />
        </Switch>
      </div>
  )
}


export default Admin;