import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/reducers';
import UserCard from './UserCard';
import { logoutUser } from '../../../redux/actions';

export interface StateProps {
  auth:any;
 }
export interface DispatchProps {
  logoutUser: (user: any) => {};
 }
export interface OwnProps { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
    };
  },
  {
    logoutUser,
  },
)(UserCard);
