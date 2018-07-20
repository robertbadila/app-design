import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';
import Sidenav from '../../layout/sidenav/Sidenav';
import Appbar from '../../layout/appbar/Appbar';
import TaskTable from './tasktable/';
import { FlatButton } from 'material-ui';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className="Home">
        <Appbar />
        <Sidenav />
        <div className="dashboard-content">
          <h1>Overview</h1>
          <TaskTable />
          <div className="see-all-wrapper">
            <FlatButton label="See all"/>
          </div>
        </div>
      </div>
    );
  }
}
