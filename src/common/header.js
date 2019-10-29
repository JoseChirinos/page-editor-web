import React, { Component } from 'react'
import './header.css'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router'
import {
  NavLink
} from 'react-router-dom'
/* Components */
import BreadCrump from './breadcrump'
import { Button } from '@rmwc/button'
import { IconButton } from '@rmwc/icon-button'
import { Icon } from '@rmwc/icon'

/* Data */
import { getUrl } from '../pages/@data/get-url'

/* 
 *  ---DATOS DE ENTRADA---
 *
 *  title: String "Titulo"
 *  match: Object { path ... }
 *  actions: Array [ {on:String,title:String}]
 *  theme: Object { background: String,color: String }
 * 
 */

class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      scroller: true,
      limit: 75,
      urlBack: '/'
    }
    this.header = React.createRef()
  }
  componentDidMount() {
    let url = getUrl.back(this.props.match.url)
    window.addEventListener('scroll', this.scrollAnimations, false)
    this.header.current.style.height = String(this.header.current.offsetHeight).concat('px')
    if (this.header.current.offsetHeight > 145) {
      this.setState({
        limit: 150,
        urlBack: url.path
      })
    } else {
      this.setState({
        limit: 75,
        urlBack: url.path
      })
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimations, false)
  }
  scrollAnimations = () => {
    let position = window.scrollY
    let self = this
    window.requestAnimationFrame(function () {
      self.stopNav(position)
    })
  }
  stopNav = (sp) => { //sp = scroll position
    if (sp > this.state.limit && this.state.scroller) {
      this.setState({
        scroller: false
      })
    } else {
      if (sp <= this.state.limit && !this.state.scroller) {
        this.setState({
          scroller: true
        })
      }
    }
  }

  render() {
    const { match, history, title, actions, theme, back } = this.props
    return (
      <div
        ref={this.header}
        className={`${this.state.scroller ? 'Header' : 'HeaderFixed'}`}
        style={{
          backgroundColor: theme.background
        }}
      >
        <div
          className={`${this.state.scroller ? '' : 'HeaderFixed-container'}`}
          style={{
            backgroundColor: theme.background
          }}
        >

          <aside className={`${this.state.scroller ? 'Header-navigation' : 'HeaderFixed-navigation'}`}>
            <BreadCrump
              match={match}
            />
          </aside>
          <aside className={`${this.state.scroller ? 'Header-action' : 'HeaderFixed-action'}`}>
            <h1 className={`${this.state.scroller ? 'Header-action--title' : 'HeaderFixed-action--title'}`}>
              {
                back ?
                  <span className={`${this.state.scroller ? 'Header-back' : 'HeaderFixed-back'}`}>
                    <IconButton
                      icon="keyboard_backspace"
                      style={{
                        outline: 'none'
                      }}
                      onClick={() => { history.goBack() }}
                    />
                  </span>
                  :
                  <NavLink
                    to={this.state.urlBack}
                    className={`${this.state.scroller ? 'Header-back' : 'HeaderFixed-back'}`}
                  >
                    <Icon icon="keyboard_backspace" />
                  </NavLink>
              }
              {title}
            </h1>
            {
              actions.length === 0 ?
                <div />
                :
                <div className={`${this.state.scroller ? 'Header-action--button' : 'HeaderFixed-action--button'}`}>
                  {
                    actions.map((action, index) => (
                      <NavLink
                        to={action.on}
                        key={`ab${index}`}
                        className="Header-link">
                        {this.state.scroller ?
                          <Button
                            raised
                            className={action.theme}
                            label={action.title}
                          />
                          :
                          <IconButton icon={action.icon} className={action.theme} />
                        }
                      </NavLink>
                    ))
                  }
                </div>
            }
          </aside>

        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  theme: PropTypes.object,
  back: PropTypes.bool,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
}
Header.defaultProps = {
  title: "Titulo",
  actions: [],
  theme: {
    background: '#34017d',
    color: '#ffffff'
  },
  back: false
}

export default withRouter(Header)