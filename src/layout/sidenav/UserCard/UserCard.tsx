import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_userCard';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Settings from 'material-ui/svg-icons/action/settings';
const avatar = require('./images/user-avatar.png');

export type Props = StateProps & OwnProps & DispatchProps;

interface OtherProps {
  open: boolean;
  anchorEl: null | any;
}

export default class UserCard extends React.PureComponent<Props, OtherProps> {
  constructor() {
    super();
    this.state= {
      open: false,
      anchorEl: null,
    }
  }

  logout = () => {
    const { auth, logoutUser } = this.props;
    logoutUser(auth.user);
  }

  handleTouchTap = (e: any) => {
    e.preventDefault();
    this.setState({
      open:true,
      anchorEl: e.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      open:false
    })
  }

  render() {
    const { open, anchorEl } = this.state;
    return (
      <div className="user-card">
        <div className="avatar-wrapper">
          <Avatar className="user-avatar" size={120} src={avatar}/>
        </div>
        <div className="settings-wrapper">
          <IconButton onTouchTap={this.handleTouchTap} className="settings-button"><Settings /></IconButton>
        </div>
        <Popover open={open}
                 onRequestClose={this.handleRequestClose}
                 anchorEl={anchorEl}>
          <MenuItem>Preferences</MenuItem>
          <MenuItem onTouchTap={this.logout}>Sing Out</MenuItem>            
        </Popover>
        <h3 className="user-name">User Name</h3>
      </div>
    );
  }
}
