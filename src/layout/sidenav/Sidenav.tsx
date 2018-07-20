import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_sidenav';
import { Link } from 'react-router';
import UserCard from './UserCard/';
import { Divider, FlatButton, RaisedButton } from 'material-ui';
const logo = require('../../assets/logo/complete-white.svg');
import Home from 'material-ui/svg-icons/action/home';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Add from 'material-ui/svg-icons/content/add'


export type Props = StateProps & OwnProps & DispatchProps;

export default class Sidenav extends React.PureComponent<Props, {}> {
  render() {
    const menuItems = {minWidth:'initial', width:'100%', height:'50px'}
    return (
      <aside className="sidenav">
        <div className="menu-toggle" >
          <div className="logo-wrap">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </div>
        <UserCard />
        <Divider style={{backgroundColor:'rgba(0, 0, 0, .14)', marginTop:'250px'}}/>
        <FlatButton
          className="flat-button"
          style={menuItems}>
            <Link to="/" className="menu-item">
              <Home />
              <span className="button-text">Home</span>
            </Link>
        </FlatButton>
        <FlatButton
          className="flat-button"
          style={menuItems}>
            <Link to="/" className="menu-item">
              <Dashboard />
              <span className="button-text">Dashboard</span>
            </Link>          
        </FlatButton>
        <Divider style={{backgroundColor:'rgba(0, 0, 0, .14)'}}/>
        <div className="add-task-wrapper">
          <RaisedButton
            primary={true}
            labelPosition="after"
            label="Add Task"
            icon={<Add />}/> 
        </div>
      </aside>
    );
  }
}
