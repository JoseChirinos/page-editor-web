import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
/* components */
import ScrollTop from '../../common/scrolltop'
import UserList from './components/List'
import UserNew from './components/New'
import UserDetail from './components/Detail'
import UserDown from './components/Down'
import UserUp from './components/Up'
import UserChangePassword from './components/ChangePassword'

class User extends Component {
  render() {
    const { match } = this.props;
    // console.log(match.url)
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
            <Route
              exact
              path={`${match.url}/bajas`}
              component={UserDown}
            />
            <Route
              exact
              path={`${match.url}/bajas/:id`}
              component={UserUp}
            />

            <Route
              exact
              path={`${match.url}/:id`}
              component={UserDetail}
            />
            <Route
              path={`${match.url}/:id/password`}
              component={UserChangePassword}
            />
          </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default User;