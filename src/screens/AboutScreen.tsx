import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.body}>
      <Text>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default AboutScreen;
