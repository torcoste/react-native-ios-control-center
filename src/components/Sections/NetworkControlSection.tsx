import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
} from 'react-native';

import ButtonRounded from '../Buttons/ButtonRounded';
import Row from '../Wrappers/Row';
import Theme from '../../Theme';

interface Props extends TouchableWithoutFeedbackProps {}

export default class NetworkControlSection extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    this.animatedScaleValue = new Animated.Value(
      Theme.Animations.sections.default.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn() {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.sections.default.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut() {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.sections.default.pressOut.toValue,
      friction: Theme.Animations.sections.default.pressOut.friction,
      tension: Theme.Animations.sections.default.pressOut.tension,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {style} = this.props;
    const animatedStyle = {transform: [{scale: this.animatedScaleValue}]};

    return (
      <TouchableWithoutFeedback
        {...this.props}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}>
        <Animated.View style={[styles.container, style, animatedStyle]}>
          <Row>
            <ButtonRounded
              icon={'plane'}
              colorEnabledButton={
                Theme.Colors.buttons.custom.rounded.plane.enabledBackground
              }
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />
            <ButtonRounded
              icon={'broadcast-tower'}
              colorEnabledButton={
                Theme.Colors.buttons.custom.rounded.mobileData.enabledBackground
              }
              initiallyEnabled
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />
          </Row>
          <Row>
            <ButtonRounded
              icon={'wifi'}
              colorDisabledButton={
                Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                  .disabledBackground
              }
              colorDisabledIcon={
                Theme.Colors.buttons.custom.rounded.wifi_bluetooth.disabledIcon
              }
              initiallyEnabled
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />
            <ButtonRounded
              icon={'bluetooth-b'}
              iconSize={Theme.Sizes.icon.custom.bluetooth}
              colorDisabledButton={
                Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                  .disabledBackground
              }
              colorDisabledIcon={
                Theme.Colors.buttons.custom.rounded.wifi_bluetooth.disabledIcon
              }
              initiallyEnabled
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />
          </Row>
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
    padding: Theme.Indents.sm,
    backgroundColor: Theme.Colors.sections.default.background,
    borderRadius: Theme.Borders.radius,
  },
});
