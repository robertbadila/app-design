import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import InfoCard from './InfoCard';

export interface StateProps { }
export interface DispatchProps { }
export interface OwnProps { 
  firstTitle: string | number;
  secondTitle: string | number | null;
  firstIcon: any;
  secondIcon: any | null;
  firstText: string | number;
  secondText: string | number | null;
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {};
  },
  {
  },
)(InfoCard);
