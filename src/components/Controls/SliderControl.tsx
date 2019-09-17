import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Theme from '../../Theme';

export interface SliderControlProps extends TouchableWithoutFeedbackProps {
  icon: string;
}

export default class SliderControl extends React.Component<SliderControlProps> {
  constructor(props: SliderControlProps) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.Animations.sliders.default.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.sliders.default.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.Animations.sliders.default.pressOut.toValue,
      friction: Theme.Animations.sliders.default.pressOut.friction,
      tension: Theme.Animations.sliders.default.pressOut.tension,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {icon, style} = this.props;
    const animatedStyle = {transform: [{scale: this.animatedScaleValue}]};

    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}>
        <Animated.View style={[styles.container, style, animatedStyle]}>
          <Icon name={icon} style={styles.icon} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    margin: Theme.Indents.sm,
    aspectRatio: 0.44,
    backgroundColor: Theme.Colors.sliderControl.background,
    borderRadius: Theme.Borders.radius,
  },
  icon: {
    fontSize: Theme.Sizes.icon.sliderControl,
    color: Theme.Colors.sliderControl.icon,
    marginBottom: Theme.Indents.dynamic.sliderControlIcon,
  },
});
