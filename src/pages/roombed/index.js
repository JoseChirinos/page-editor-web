import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
/* components */
import ScrollTop from '../../common/scrolltop';
import RoomBedList from './roombed-list';
// import PositionNew from './position-new';
// import PositionDetail from './position-detail';


class Position extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ScrollTop>
          <Switch>
              <Route
                exact
                path={match.url}
                component={ RoomBedList }
              />
              {/* <Route 
                exact
                path={`${match.url}/nuevo`}
                component={ PositionNew }
              />
              <Route
                path={`${match.url}/:id`}
                component ={ PositionDetail }
              /> */}
            </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default Position;