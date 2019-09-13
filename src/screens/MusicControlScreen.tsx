import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {ScreenProps} from '../types/Application.d';

import Theme from '../Theme';

export default class MusicControlScreen extends React.Component<ScreenProps> {
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
              <Text>MusicControlScreen</Text>
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
    marginHorizontal: 20,
    padding: 50,
    borderRadius: Theme.Borders.radius,
  },
});
