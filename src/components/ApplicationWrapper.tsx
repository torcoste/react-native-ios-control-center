import React from 'react';
import Application from '../Application.d';

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
