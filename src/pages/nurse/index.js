import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
/* components */
import ScrollTop from '../../common/scrolltop';
import NurseList from './nurse-list';
import NurseNew from './nurse-new';
import NurseDetail from './nurse-detail';
import NurseDown from './nurse-down';
import NurseUp from './nurse-up';

class Nurse extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <ScrollTop>
          <Switch>
              <Route
                exact
                path={match.url}
                component={ NurseList }
              />
              <Route 
                exact
                path={`${match.url}/nuevo`}
                component={ NurseNew }
              />
              <Route 
                exact
                path={`${match.url}/bajas`}
                component={ NurseDown }
              />
              <Route
                path={`${match.url}/bajas/:id`}
                component={ NurseUp }
              />
              <Route
                path={`${match.url}/:id`}
                component ={ NurseDetail }
              />
            </Switch>
        </ScrollTop>
      </div>
    )
  }
}

export default Nurse;