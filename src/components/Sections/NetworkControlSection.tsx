import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps
} from 'react-native';

import ButtonRounded from '../Buttons/ButtonRounded';
import Theme from '../../Theme';
import Row from '../Wrappers/Row';

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
          <Row>
            <ButtonRounded
              icon={'plane'}
              colorEnableButton={Theme.Colors.buttons.custom.rounded.plane.enabledBackground}
            />
            <ButtonRounded
              icon={'broadcast-tower'}
              colorEnableButton={Theme.Colors.buttons.custom.rounded.mobileData.enabledBackground}
              isInitialEnabled
            />
          </Row>
          <Row>
            <ButtonRounded
              icon={'wifi'}
              colorDisableButton={Theme.Colors.buttons.custom.rounded.wifi_bluetooth.disabledBackground}
              colorDisableIcon={Theme.Colors.buttons.custom.rounded.wifi_bluetooth.disabledIcon}
              isInitialEnabled
            />
            <ButtonRounded
              icon={'bluetooth-b'}
              iconSize={Theme.Sizes.icon.custom.bluetooth}
              colorDisableButton={Theme.Colors.buttons.custom.rounded.wifi_bluetooth.disabledBackground}
              colorDisableIcon={Theme.Colors.buttons.custom.rounded.wifi_bluetooth.disabledIcon}
              isInitialEnabled
            />
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
  }
});
