import React from 'react';
import {StyleSheet, ViewStyle, StyleProp} from 'react-native';

import ButtonBase from './ButtonBase';
import Theme from '../../Theme';


export interface ButtonRoundedProps {
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


export default (props: ButtonRoundedProps) => (
  <ButtonBase
    iconSize={Theme.Sizes.icon.rounded}
    colorDisableButton={Theme.Colors.buttons.default.rounded.disabledBackground}
    colorEnableButton={Theme.Colors.buttons.default.rounded.enabledBackground}
    colorDisableIcon={Theme.Colors.buttons.default.rounded.disabledIcon}
    colorEnableIcon={Theme.Colors.buttons.default.rounded.enabledIcon}
    style={[styles.roundedButton, props.style]}
    {...props}
    text={undefined}
  />
);

const styles = StyleSheet.create({
  roundedButton: {
    borderRadius: Theme.Borders.circle,
    aspectRatio: 1,
  },
});
