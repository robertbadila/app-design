import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';
import { Box, Flex } from 'grid-styled';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.PureComponent<Props, {}> {
  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  render() {
    return (
      <div className="Home">
        <h1 className="page-header">Home page</h1>
        <button onClick={this.logout}>Logout</button>
        <Flex className="page-content">
          <Box width={1} p={20}>
            <h2>Box</h2>
          </Box>
          <Box width={1} p={20}>
            <h2>Box</h2>
          </Box>
        </Flex>
        <Flex className="page-content">
          <Box width={1} p={20}>
            <h2>Box</h2>
          </Box>
          <Box width={1} p={20}>
            <h2>Box</h2>
          </Box>
        </Flex>
      </div>
    );
  }
}
