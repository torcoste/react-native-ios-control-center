import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {ScreenProps} from '../types/Application.d';

import ButtonSquared from '../components/Buttons/ButtonSquared';
import ButtonRectangled from '../components/Buttons/ButtonRectangled';
import NetworkControlSection from '../components/Sections/NetworkControlSection';
import MusicControlSection from '../components/Sections/MusicControlSection';
import Row from '../components/Wrappers/Row';
import SliderControl from '../components/Controls/SliderControl';
import Theme from '../Theme';
import FlexView from '../components/Wrappers/FlexView';

export default class HomeScreen extends React.Component<ScreenProps> {
  onLongPressNetworkControlSection = () => {
    const {Application, componentId} = this.props;
    Application.navigateNetworkControl(componentId);
  };

  onLongPressMusicControlSection = () => {
    const {Application, componentId} = this.props;
    Application.navigateMusicControl(componentId);
  };

  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        blurRadius={10}
        source={Theme.Images.backgroundImage}>
        <View style={styles.controlsBoardWrapper}>
          <Row>
            <NetworkControlSection
              onLongPress={this.onLongPressNetworkControlSection}
              style={styles.flex}
            />
            <MusicControlSection
              onLongPress={this.onLongPressMusicControlSection}
              style={styles.flex}
            />
          </Row>
          <Row>
            <FlexView>
              <Row>
                <ButtonSquared icon={'lock'} />
                <ButtonSquared icon={'moon'} />
              </Row>
              <Row>
                <ButtonRectangled icon={'desktop'} text={'Screen\nMirroring'} />
              </Row>
            </FlexView>
            <FlexView>
              <Row style={StyleSheet.absoluteFill}>
                <SliderControl icon={'adjust'} />
                <SliderControl icon={'volume-up'} />
              </Row>
            </FlexView>
          </Row>
          <Row>
            <ButtonSquared icon={'lightbulb'} />
            <ButtonSquared icon={'stopwatch'} />
            <ButtonSquared icon={'calculator'} />
            <ButtonSquared icon={'camera'} />
          </Row>
          <Row>
            <ButtonSquared
              icon={'microphone'}
              iconDisabled={'microphone-slash'}
              isInitialEnabled
            />
            <ButtonSquared
              icon={'phone'}
              iconDisabled={'phone-slash'}
              isInitialEnabled
            />
            <ButtonSquared
              icon={'bell'}
              iconDisabled={'bell-slash'}
              isInitialEnabled
            />
            <ButtonSquared icon={'github'} />
          </Row>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  controlsBoardWrapper: {
    padding: Theme.Indents.lg, // TODO: make it responsible, depends on width
    flex: 1,
    justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
});
