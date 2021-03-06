import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
  GestureResponderEvent,
} from 'react-native';

import ButtonBase from './ButtonBase';
import Theme from '../../Theme';

export interface ButtonSquaredProps {
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
}

export default class ButtonSquared extends React.Component<ButtonSquaredProps> {
  constructor(props: ButtonSquaredProps) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.Animations.buttons.default.squared.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.buttons.default.squared.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.buttons.default.squared.pressOut.toValue,
      friction: Theme.Animations.buttons.default.squared.pressOut.friction,
      tension: Theme.Animations.buttons.default.squared.pressOut.tension,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {style} = this.props;
    const animatedStyle = {transform: [{scale: this.animatedScaleValue}]};

    return (
      <ButtonBase
        iconSize={Theme.Sizes.icon.squared}
        colorDisabledButton={
          Theme.Colors.buttons.default.squared.disabledBackground
        }
        colorEnabledButton={
          Theme.Colors.buttons.default.squared.enabledBackground
        }
        colorDisabledIcon={Theme.Colors.buttons.default.squared.disabledIcon}
        colorEnabledIcon={Theme.Colors.buttons.default.squared.enabledIcon}
        {...this.props}
        style={[styles.roundedButton, style]}
        text={undefined}
        animatedStyle={animatedStyle}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      />
    );
  }
}

const styles = StyleSheet.create({
  roundedButton: {
    borderRadius: Theme.Borders.radius,
    aspectRatio: 1,
  },
});
