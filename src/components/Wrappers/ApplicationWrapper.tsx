import React from 'react';
import Application from '../../types/Application';

export default (
  Component: React.ComponentType<{Application: Application}>,
  application: Application,
) => {
  return class extends React.Component {
    render() {
      return <Component {...this.props} Application={application} />;
    }
  };
};
