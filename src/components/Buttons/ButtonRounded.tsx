import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';

import ButtonBase from './ButtonBase';
import Theme from '../../Theme';

export interface ButtonRoundedProps {
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  colorEnabledIcon?: string;
  colorEnabledButton?: string;
  colorDisabledIcon?: string;
  colorDisabledButton?: string;
  colorEnabledText?: string;
  colorDisabledText?: string;
  initiallyEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default (props: ButtonRoundedProps) => (
  <ButtonBase
    iconSize={Theme.Sizes.icon.rounded}
    colorDisabledButton={
      Theme.Colors.buttons.default.rounded.disabledBackground
    }
    colorEnabledButton={Theme.Colors.buttons.default.rounded.enabledBackground}
    colorDisabledIcon={Theme.Colors.buttons.default.rounded.disabledIcon}
    colorEnabledIcon={Theme.Colors.buttons.default.rounded.enabledIcon}
    {...props}
    style={[styles.roundedButton, props.style]}
    text={undefined}
  />
);

const styles = StyleSheet.create({
  roundedButton: {
    borderRadius: Theme.Borders.circle,
    aspectRatio: 1,
  },
});
