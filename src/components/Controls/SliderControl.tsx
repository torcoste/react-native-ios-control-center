import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Theme from '../../Theme';

export interface SliderControlProps extends TouchableOpacityProps {
  icon: string;
}

interface State {
  level: number;
}

export default class SliderControl extends React.Component<
  SliderControlProps,
  State
> {
  state = {level: 50};

  render() {
    const {icon, style} = this.props;
    const {level} = this.state;

    return (
      <TouchableOpacity style={[styles.container, style]}>
        <Icon name={icon} style={styles.icon} />
      </TouchableOpacity>
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
