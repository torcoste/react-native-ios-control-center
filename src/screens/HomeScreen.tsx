import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScreenProps} from '../Application.d';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component<ScreenProps> {
  onPress = () => {
    const {Application, componentId} = this.props;
    Application.navigateAbout(componentId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="About" onPress={this.onPress} />
      </View>
    );
  }
}

export default HomeScreen;
