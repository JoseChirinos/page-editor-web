import React from 'react'
import PropTypes from 'prop-types'
import {
    Switch,
    Route
} from 'react-router-dom'
/* components */
import ScrollTop from '../../common/scrolltop'
import PostList from './components/List'
// import UserNew from './components/New'
// import UserDetail from './components/Detail'
// import UserDown from './components/Down'
// import UserUp from './components/Up'
// import UserChangePassword from './components/ChangePassword'

const Post = ({
    match
}) => {
    return (
        <ScrollTop>
            <Switch>
                <Route
                    exact
                    path={match.url}
                    component={PostList}
                />
                {/* <Route
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
            /> */}
            </Switch>
        </ScrollTop>
    )
}

Post.propTypes = {
    match: PropTypes.shape({}).isRequired
}

export default Post;