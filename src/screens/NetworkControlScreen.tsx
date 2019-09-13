import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import {ScreenProps} from '../types/Application.d';
import Theme from '../Theme';

export default class NetworkControlScreen extends React.Component<ScreenProps> {
  onDismiss = () => {
    const {Application, componentId} = this.props;
    Application.navigateDismissOverlay(componentId);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onDismiss}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.body}>
              <Text>NetworkControlScreen</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.transparent,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: Theme.Indents.lg,
    padding: 50,
    borderRadius: Theme.Borders.radius,
  },
});
