import React from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
  Route
} from 'react-router-dom'
/* components */
import ScrollTop from '../../common/scrolltop'
import PostList from './components/List'
import PostNew from './components/New'
import PostDetail from './components/Detail'
import PostPreview from '../../components/Post/PostPreview'
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
        <Route
          exact
          path={`${match.url}/nuevo`}
          component={PostNew}
        />
        <Route
          exact
          path={`${match.url}/:id`}
          component={PostDetail}
        />
        <Route
          exact
          path={`${match.url}/:id/preview`}
          component={(props) => <PostPreview {...props} edit />}
        />
      </Switch>
    </ScrollTop>
  )
}

Post.propTypes = {
  match: PropTypes.shape({}).isRequired
}

export default Post;