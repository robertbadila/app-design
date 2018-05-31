import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import { logoutUser } from '../../redux/actions';
import Home from './Home';

export interface StateProps { }
export interface DispatchProps {
  logoutUser: () => Function;
}
export interface OwnProps { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {};
  },
  {
    logoutUser
  },
)(Home);
