import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Theme from '../../Theme';

export interface ButtonBaseProps extends TouchableWithoutFeedbackProps {
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  colorEnabledIcon: string;
  colorEnabledButton: string;
  colorDisabledIcon: string;
  colorDisabledButton: string;
  colorEnabledText?: string;
  colorDisabledText?: string;
  initiallyEnabled?: boolean;
  animatedStyle?: any; // TODO: make proper interface
}

interface State {
  isEnabled: boolean;
}

export default class ButtonBase extends React.Component<
  ButtonBaseProps,
  State
> {
  state = {
    isEnabled: this.props.initiallyEnabled
      ? this.props.initiallyEnabled
      : false,
  };

  _onPress = (event: GestureResponderEvent) => {
    this.setState({isEnabled: !this.state.isEnabled});
    this.props.onPress ? this.props.onPress(event) : null;
  };

  render() {
    const {
      style,
      animatedStyle,
      icon,
      iconDisabled,
      iconSize = Theme.Sizes.icon.default,
      colorEnabledButton,
      colorEnabledIcon,
      colorDisabledButton,
      colorDisabledIcon,
      colorEnabledText,
      colorDisabledText,
      text,
      textStyle,
    } = this.props;
    const {isEnabled} = this.state;

    const textColors = {
      enabled: colorEnabledText ? colorEnabledText : colorEnabledIcon,
      disabled: colorDisabledText ? colorDisabledText : colorDisabledIcon,
    };
    const _textStyle: StyleProp<TextStyle> = [
      styles.text,
      {color: isEnabled ? textColors.enabled : textColors.disabled},
    ];

    return (
      <TouchableWithoutFeedback {...this.props} onPress={this._onPress}>
        <Animated.View
          style={[
            styles.container,
            style,
            animatedStyle,
            {
              backgroundColor: isEnabled
                ? colorEnabledButton
                : colorDisabledButton,
            },
          ]}>
          <Icon
            name={isEnabled ? icon : iconDisabled ? iconDisabled : icon}
            size={iconSize}
            color={isEnabled ? colorEnabledIcon : colorDisabledIcon}
            solid
          />
          {text ? <Text style={[_textStyle, textStyle]}>{text}</Text> : null}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    flex: 1,
    margin: Theme.Indents.sm,
  },
  text: {
    textAlign: 'left',
    fontSize: Theme.Sizes.font.button.default,
    fontFamily: Theme.Fonts.primary,
    marginVertical: -Theme.Indents.sm,
  },
});
