import React from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';

import ButtonBase from './ButtonBase';
import Theme from '../../Theme';

export interface ButtonRectangledProps {
  icon: string;
  text: string;
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

export default (props: ButtonRectangledProps) => (
  <ButtonBase
    iconSize={Theme.Sizes.icon.rectangled}
    colorDisableButton={Theme.Colors.buttons.default.rectangled.disabledBackground}
    colorEnableButton={Theme.Colors.buttons.default.rectangled.enabledBackground}
    colorDisableIcon={Theme.Colors.buttons.default.rectangled.disabledIcon}
    colorEnableIcon={Theme.Colors.buttons.default.rectangled.enabledIcon}
    colorDisableText={Theme.Colors.buttons.default.rectangled.disabledText}
    colorEnableText={Theme.Colors.buttons.default.rectangled.enabledText}
    {...props}
    style={[styles.rectangledButton, props.style]}
  />
);

const styles = StyleSheet.create({
  rectangledButton: {
    borderRadius: Theme.Borders.radius,
    aspectRatio: 2.25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: Theme.Indents.md,
  },
});
