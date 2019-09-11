import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Theme from '../../Theme';

interface Props extends TouchableOpacityProps {
  icon: string;
  colorEnableIcon: string;
  colorEnableButton: string;
  colorDisableIcon: string;
  colorDisableButton: string;
  isInitialEnabled: boolean;
}

interface State {
  isEnabled: boolean;
}

export default class ButtonBase extends React.Component<Props, State> {
  state = {isEnabled: this.props.isInitialEnabled};

  render() {
    const {children, style, icon} = this.props;

    return (
      <TouchableOpacity {...this.props} style={[styles.container, style]}>
        {icon ? <Image source={{uri: icon}} style={styles.icon} /> : children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});
