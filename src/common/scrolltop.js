import React, { useEffect } from 'react'
import {
  withRouter
} from 'react-router-dom'

// class ScrollTop extends React.Component {

//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       window.scrollTo(0, 0)
//     }
//   }


//   render() {
//     return this.props.children
//   }
// }

const ScrollTop = ({
  children,
  location
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return children
}
export default withRouter(ScrollTop)