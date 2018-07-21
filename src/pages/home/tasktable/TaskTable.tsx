import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_taskTable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { IconButton, Popover, MenuItem } from 'material-ui';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import TableActions from './actions';

export type Props = StateProps & OwnProps & DispatchProps;

interface Row {
  task: any;
  summary:any;
  assignee: any;
  unit: any;
  urgency: any;
  created: any;
  status: any;
}

interface OtherProps {
  rows:Row[];
  open: boolean;
  anchorEl: null | any;
}

export default class TaskTable extends React.PureComponent<Props, OtherProps> {
  constructor(){
    super();
    this.state={
      open: false,
      anchorEl: null,
      rows:[
         { 
          task: 'TT-05',
          summary: 'Clean the stairs',
          assignee: 'Alejandro Fields',
          unit: '103',
          urgency: 'HIGH',
          created: '12/02/2018',
          status:'IN PROGRESS' 
        },
        {
          task: 'TT-04',
          summary: 'Clean the door',
          assignee: 'Alejandro Alex',
          unit: '102',
          urgency: 'LOW',
          created: '12/01/2018',
          status:'IN PROGRESS' 
        },
      ]
    }
  }

  handleTouchTap = (e: any) => {
    e.preventDefault();
    console.log(e.currentTarget);
    this.setState({
      open:true,
      anchorEl: e.currentTarget
    })
  }

  onRequestClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
    const stateRows= this.state.rows;
    const { open, anchorEl } = this.state;

    const tableRows = stateRows.map((row:any)=>{
      return(
        <TableRow displayBorder={false}>
          <TableRowColumn>{row.task}</TableRowColumn>
          <TableRowColumn>{row.summary}</TableRowColumn>
          <TableRowColumn>{row.assignee}</TableRowColumn>
          <TableRowColumn>{row.unit}</TableRowColumn>
          <TableRowColumn>
            <span className={`urgency-background` && row.urgency === "HIGH" ? `red` : `green`}>
              {row.urgency}
            </span>
          </TableRowColumn>
          <TableRowColumn>{row.created}</TableRowColumn>
          <TableRowColumn>{row.status}</TableRowColumn>
          <TableRowColumn>
            <h2>
              <TableActions />
            </h2>
          </TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div className="TaskTable">
        <Table fixedFooter={false}
               fixedHeader={false}
               selectable={false}
               >
        <TableHeader displaySelectAll={false}
                     adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>TASK</TableHeaderColumn>
            <TableHeaderColumn>SUMMARY</TableHeaderColumn>
            <TableHeaderColumn>ASSIGNEE</TableHeaderColumn>
            <TableHeaderColumn>UNIT</TableHeaderColumn>
            <TableHeaderColumn>
              URGENCY
              <div className="button-wrapper">
                <IconButton 
                            // tooltip="order by"
                            // tooltipPosition="top-left"
                            // tooltipStyles={{fontSize:'12px', color:'#f4f4f4'}}
                            onTouchTap={this.handleTouchTap}>
                  <ArrowDropDown/>
                </IconButton>
              </div>
              <Popover open={open}
                       onRequestClose={this.onRequestClose}
                       anchorEl={anchorEl}
                       anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                       targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem style={{fontSize:'13px'}}>LOW to HIGH</MenuItem>
                <MenuItem style={{fontSize:'13px'}}>HIGH to LOW</MenuItem>
              </Popover>
            </TableHeaderColumn>
            <TableHeaderColumn>CREATED</TableHeaderColumn>
            <TableHeaderColumn>STATUS</TableHeaderColumn>
            <TableHeaderColumn>ACTIONS</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {tableRows}
          {/* <TableRow>
            <TableRowColumn>{task}</TableRowColumn>
            <TableRowColumn>{summary}</TableRowColumn>
            <TableRowColumn>{assignee}</TableRowColumn>
            <TableRowColumn>{unit}</TableRowColumn>
            <TableRowColumn>{urgency}</TableRowColumn>
            <TableRowColumn>{created}</TableRowColumn>
            <TableRowColumn>{status}</TableRowColumn>
            <TableRowColumn>clickdreapta delete</TableRowColumn>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
    );
  }
}
