import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Home from './Home';

export interface StateProps { 
  auth: any;
}
export interface DispatchProps { }
export interface OwnProps { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
    };
  },
  { },
)(Home);
