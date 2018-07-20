import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_appbar';
import { IconButton, Badge } from 'material-ui';
import Message from 'material-ui/svg-icons/communication/message';
import Notifications from 'material-ui/svg-icons/social/notifications';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Appbar extends React.PureComponent<Props, {}> {
  render() {
    return (
      <header>
        <div className="appbar-items">
          <Badge className="badge"
                 style={{padding:'24px 0 12px 0'}}
                 badgeContent=""
                 secondary={true}>
            <IconButton className="appbar-button messages">
              <Message/>
            </IconButton>
          </Badge>
          <Badge className="badge"
                 style={{padding:'24px 0 12px 0'}}
                 badgeContent=""
                 secondary={true}>
            <IconButton className="appbar-button notifications">
              <Notifications />
            </IconButton>
          </Badge>
        </div>
      </header>
    );
  }
}
