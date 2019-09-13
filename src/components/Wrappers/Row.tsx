import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  children?: Element[] | Element;
}

export default (props: Props) => (
  <View {...props} style={[styles.row, props.style]}>
    {props.children ? props.children : null}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
