import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
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
        <ImageBackground
          style={styles.backgroundImage}
          blurRadius={3}
          source={Theme.Images.backgroundImage}>
          <TouchableWithoutFeedback>
            <View style={styles.body}>
              <Text>MusicControlScreen</Text>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
