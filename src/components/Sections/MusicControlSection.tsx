import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Row from '../Wrappers/Row';
import Theme from '../../Theme';

interface Props extends TouchableWithoutFeedbackProps {}

interface State {}

export default class NetworkControlSection extends React.Component<
  Props,
  State
> {
  render() {
    const {style} = this.props;

    return (
      <TouchableWithoutFeedback {...this.props}>
        <View style={[styles.container, style]}>
          <View style={styles.flex}></View>
          <Row style={styles.controls}>
            <Icon style={[styles.icon, styles.wards]} name={'backward'} />
            <Icon style={[styles.icon, styles.play]} name={'play'} />
            <Icon style={[styles.icon, styles.wards]} name={'forward'} />
          </Row>
        </View>
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
