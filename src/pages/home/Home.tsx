import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';
import Sidenav from '../../layout/sidenav/Sidenav';
import Appbar from '../../layout/appbar/Appbar';
import InfoCard from '../../components/InfoCard';
import TaskTable from './tasktable/';
import { FlatButton, IconButton } from 'material-ui';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Surface from 'material-ui/svg-icons/image/crop-free';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-downward';
import Building from 'material-ui/svg-icons/maps/store-mall-directory';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';


export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className="Home">
        <Appbar />
        <Sidenav />
        <div className="home-content">
          <div className="cards-grid">
            <InfoCard firstTitle="12" secondTitle="452m"  firstIcon={<HomeIcon/>} secondIcon={<Surface />} firstText="HOME UNITS" secondText="LIVING AREA"/>
            <InfoCard firstTitle="28.5k" secondTitle="6.5k"  firstIcon={<ArrowUp/>} secondIcon={<ArrowDown/>} firstText="PROFITS 2018" secondText="EXPENCES 2017"/>
            <div className="box3">
              <InfoCard  firstTitle="Condo N 495" secondTitle={null}  firstIcon={<Building />} secondIcon={<IconButton><ArrowDropDown /></IconButton>} firstText=" 6474 Lenard Bvd" secondText={null}/>
            </div>
          </div>
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
