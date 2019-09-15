import React from 'react';
import {
  StyleSheet,
  Text,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Theme from '../../Theme';

export interface ButtonRoundedWithCaptionProps extends TouchableOpacityProps {
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  colorEnableIcon?: string;
  colorEnableButton?: string;
  colorDisableIcon?: string;
  colorDisableButton?: string;
  colorEnableText?: string;
  colorDisableText?: string;
  isInitialEnabled?: boolean;
}

interface State {
  isEnabled: boolean;
}

export default class ButtonRoundedWithCaption extends React.Component<
  ButtonRoundedWithCaptionProps,
  State
> {
  state = {
    isEnabled: this.props.isInitialEnabled
      ? this.props.isInitialEnabled
      : false,
  };

  _onPress = (event: GestureResponderEvent) => {
    this.setState({isEnabled: !this.state.isEnabled});
    this.props.onPress ? this.props.onPress(event) : null;
  };

  render() {
    const {
      style,
      icon,
      iconDisabled,
      iconSize = Theme.Sizes.icon.rounded,
      colorEnableButton = Theme.Colors.buttons.default.rounded
        .enabledBackground,
      colorEnableIcon = Theme.Colors.buttons.default.rounded.enabledIcon,
      colorDisableButton = Theme.Colors.buttons.default.rounded
        .disabledBackground,
      colorDisableIcon = Theme.Colors.buttons.default.rounded.disabledIcon,
      colorEnableText,
      colorDisableText,
      text,
    } = this.props;
    const {isEnabled} = this.state;

    const textColors = {
      enabled: colorEnableText
        ? colorEnableText
        : Theme.Colors.buttons.default.rounded.enabledIcon,
      disabled: colorDisableText
        ? colorDisableText
        : Theme.Colors.buttons.default.rounded.disabledIcon,
    };
    const textStyle: StyleProp<TextStyle> = [
      styles.text,
      {color: isEnabled ? textColors.enabled : textColors.disabled},
    ];

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          {...this.props}
          onPressOut={this._onPress}
          style={[
            styles.container,
            styles.roundedButton,
            style,
            {
              backgroundColor: isEnabled
                ? colorEnableButton
                : colorDisableButton,
            },
          ]}>
          <Icon
            name={isEnabled ? icon : iconDisabled ? iconDisabled : icon}
            size={iconSize}
            color={isEnabled ? colorEnableIcon : colorDisableIcon}
            solid
          />
        </TouchableOpacity>

        {text ? (
          <Text style={[textStyle, this.props.textStyle]} numberOfLines={1}>
            {text}
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    aspectRatio: 1,
    margin: Theme.Indents.dynamic.buttonRoundedWithCaptionMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    flex: 1,
    margin: Theme.Indents.sm,
  },
  text: {
    textAlign: 'center',
    fontSize: Theme.Sizes.font.button.default,
    fontFamily: Theme.Fonts.primary,
    marginHorizontal: -Theme.Indents.sm,
  },
  roundedButton: {
    borderRadius: Theme.Borders.circle,
    aspectRatio: 1,
  },
});
