import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Row from '../Wrappers/Row';
import Theme from '../../Theme';

interface Props extends TouchableWithoutFeedbackProps {}

export default class NetworkControlSection extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    this.animatedScaleValue = new Animated.Value(Theme.Animations.sections.default.initialValue);
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
          <View style={styles.flex}></View>
          <Row style={styles.controls}>
            <Icon style={[styles.icon, styles.wards]} name={'backward'} />
            <Icon style={[styles.icon, styles.play]} name={'play'} />
            <Icon style={[styles.icon, styles.wards]} name={'forward'} />
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
  flex: {flex: 1},
  controls: {
    justifyContent: 'space-around',
  },
  icon: {
    margin: Theme.Indents.md,
  },
  play: {
    color: Theme.Colors.sections.musicControl.icons.play,
    fontSize: Theme.Sizes.icon.musicControlSection.play,
  },
  wards: {
    color: Theme.Colors.sections.musicControl.icons.wards,
    fontSize: Theme.Sizes.icon.musicControlSection.wards,
  },
});
