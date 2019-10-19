import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
/* components */
import ScrollTop from '../../common/scrolltop'
import UserList from './components/List'
import UserNew from './components/New'
// import UserDetail from './components/Detail'
// import UserDown from './components/Down'
// import UserUp from './components/Up'

class User extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ScrollTop>
          <Switch>
            <Route
              exact
              path={match.url}
              component={UserList}
            />
            <Route
              exact
              path={`${match.url}/nuevo`}
              component={UserNew}
            />
            {/* 
            <Route
              exact
              path={`${match.url}/bajas`}
              component={UserDown}
            />
            <Route
              path={`${match.url}/bajas/:id`}
              component={UserUp}
            />
            <Route
              path={`${match.url}/:id`}
              component={UserDetail}
            /> */}
          </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default User;