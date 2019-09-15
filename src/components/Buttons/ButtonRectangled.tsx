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

export interface ButtonRectangledProps {
  icon: string;
  text: string;
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

export default class ButtonRectangled extends React.Component<
  ButtonRectangledProps
> {
  constructor(props: ButtonRectangledProps) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    this.animatedScaleValue = new Animated.Value(
      Theme.Animations.buttons.default.rectangled.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn() {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.buttons.default.rectangled.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut() {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.buttons.default.rectangled.pressOut.toValue,
      friction: Theme.Animations.buttons.default.rectangled.pressOut.friction,
      tension: Theme.Animations.buttons.default.rectangled.pressOut.tension,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {style} = this.props;
    const animatedStyle = {transform: [{scale: this.animatedScaleValue}]};

    return (
      <ButtonBase
        iconSize={Theme.Sizes.icon.rectangled}
        colorDisabledButton={
          Theme.Colors.buttons.default.rectangled.disabledBackground
        }
        colorEnabledButton={
          Theme.Colors.buttons.default.rectangled.enabledBackground
        }
        colorDisabledIcon={Theme.Colors.buttons.default.rectangled.disabledIcon}
        colorEnabledIcon={Theme.Colors.buttons.default.rectangled.enabledIcon}
        colorDisabledText={Theme.Colors.buttons.default.rectangled.disabledText}
        colorEnabledText={Theme.Colors.buttons.default.rectangled.enabledText}
        {...this.props}
        style={[styles.rectangledButton, style]}
        animatedStyle={animatedStyle}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      />
    );
  }
}

const styles = StyleSheet.create({
  rectangledButton: {
    borderRadius: Theme.Borders.radius,
    aspectRatio: 2.25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: Theme.Indents.md,
  },
});
