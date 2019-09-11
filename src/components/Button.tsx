import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  text: {
    fontWeight: '500',
    color: 'white',
  },
});

const Button: React.FC<Props> = ({title, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
