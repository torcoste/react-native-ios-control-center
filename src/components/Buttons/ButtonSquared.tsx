import React from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';

import ButtonBase from './ButtonBase';
import Theme from '../../Theme';


export interface ButtonSquaredProps {
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  colorEnableIcon?: string;
  colorEnableButton?: string;
  colorDisableIcon?: string;
  colorDisableButton?: string;
  colorEnableText?: string;
  colorDisableText?: string;
  isInitialEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
}


export default (props: ButtonSquaredProps) => (
  <ButtonBase
    iconSize={Theme.Sizes.icon.squared}
    colorDisableButton={Theme.Colors.buttons.default.squared.disabledBackground}
    colorEnableButton={Theme.Colors.buttons.default.squared.enabledBackground}
    colorDisableIcon={Theme.Colors.buttons.default.squared.disabledIcon}
    colorEnableIcon={Theme.Colors.buttons.default.squared.enabledIcon}
    {...props}
    style={[styles.roundedButton, props.style]}
    text={undefined}
  />
);

const styles = StyleSheet.create({
  roundedButton: {
    borderRadius: Theme.Borders.radius,
    aspectRatio: 1,
  },
});
