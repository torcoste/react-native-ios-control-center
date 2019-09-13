import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Theme from '../../Theme';

export interface ButtonBaseProps extends TouchableOpacityProps {
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  text?: string;
  colorEnableIcon: string;
  colorEnableButton: string;
  colorDisableIcon: string;
  colorDisableButton: string;
  colorEnableText?: string;
  colorDisableText?: string;
  isInitialEnabled?: boolean;
}

interface State {
  isEnabled: boolean;
}

export default class ButtonBase extends React.Component<
  ButtonBaseProps,
  State
> {
  state = {
    isEnabled: this.props.isInitialEnabled
      ? this.props.isInitialEnabled
      : false,
  };

  _onPress = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    const {
      style,
      icon,
      iconDisabled,
      iconSize = Theme.Sizes.icon.default,
      colorEnableButton,
      colorEnableIcon,
      colorDisableButton,
      colorDisableIcon,
      colorEnableText,
      colorDisableText,
      text,
    } = this.props;
    const {isEnabled} = this.state;

    const textColors = {
      enabled: colorEnableText ? colorEnableText : colorEnableIcon,
      disabled: colorDisableText ? colorDisableText : colorDisableIcon,
    };
    const textStyle = [
      styles.text,
      {color: isEnabled ? textColors.enabled : textColors.disabled},
    ];

    return (
      <TouchableOpacity
        onPressOut={this._onPress}
        style={[
          styles.container,
          style,
          {backgroundColor: isEnabled ? colorEnableButton : colorDisableButton},
        ]}>
        <Icon
          name={isEnabled ? icon : iconDisabled ? iconDisabled : icon}
          size={iconSize}
          color={isEnabled ? colorEnableIcon : colorDisableIcon}
          solid
        />
        {text ? <Text style={textStyle}>{text}</Text> : null}
      </TouchableOpacity>
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
