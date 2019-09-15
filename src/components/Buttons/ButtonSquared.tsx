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
  colorEnableIcon?: string;
  colorEnableButton?: string;
  colorDisableIcon?: string;
  colorDisableButton?: string;
  colorEnableText?: string;
  colorDisableText?: string;
  isInitialEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default class ButtonSquared extends React.Component<ButtonSquaredProps> {
  constructor(props: ButtonSquaredProps) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    this.animatedScaleValue = new Animated.Value(Theme.Animations.buttons.default.squared.initialValue);
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn() {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.buttons.default.squared.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut() {
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
        colorDisableButton={
          Theme.Colors.buttons.default.squared.disabledBackground
        }
        colorEnableButton={
          Theme.Colors.buttons.default.squared.enabledBackground
        }
        colorDisableIcon={Theme.Colors.buttons.default.squared.disabledIcon}
        colorEnableIcon={Theme.Colors.buttons.default.squared.enabledIcon}
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
