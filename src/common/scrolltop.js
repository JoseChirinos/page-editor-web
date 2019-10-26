import { useEffect } from 'react'
import {
  withRouter
} from 'react-router'

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