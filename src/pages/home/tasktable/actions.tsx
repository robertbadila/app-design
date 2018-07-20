import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import Launch from 'material-ui/svg-icons/action/launch';
import Feedback from 'material-ui/svg-icons/action/feedback';
import Clear from 'material-ui/svg-icons/content/clear';

var TableActions = React.createClass({
  render() {
   return (
    <section className="table-actions">
      <div className="table-button-wrapper">
      <IconButton>
        <Feedback />
      </IconButton>
      </div>
      <div className="table-button-wrapper">
      <IconButton>
        <Clear />
      </IconButton>
      </div>
      <div className="table-button-wrapper">
      <IconButton>
        <Launch />
      </IconButton>
      </div>
    </section>
   );
}
})

export default TableActions;