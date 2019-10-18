import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
/* components */
import ScrollTop from '../../common/scrolltop';
import DemandList from './demand-list';

class Demand extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ScrollTop>
          <Switch>
              <Route
                exact
                path={match.url}
                component={ DemandList }
              />
            </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default Demand;