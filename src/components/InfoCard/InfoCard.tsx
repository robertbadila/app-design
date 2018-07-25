import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_infoCard';
import { Card } from 'material-ui';

export type Props = StateProps & OwnProps & DispatchProps;

export default class InfoCard extends React.PureComponent<Props, {}> {
  render() {
    const {
      firstTitle,
      firstText,
      firstIcon,
      secondTitle,
      secondText,
      secondIcon
    } = this.props;
    return (
      <Card className="info-card">
        <div className="card-box">
          <div className="left-side">
            <h1 className="card-title"><span className="title-icon">{firstIcon}</span>{firstTitle}</h1>
            <h5 className="card-subtitle">{firstText}</h5>
          </div>
          <div className="right-side">
            <h1 className="card-title"><span className="title-icon">{secondIcon}</span>{secondTitle}</h1>
            <h5 className="card-subtitle">{secondText}</h5>
          </div>
        </div>
      </Card>
    );
  }
}
