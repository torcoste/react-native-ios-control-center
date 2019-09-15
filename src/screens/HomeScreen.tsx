import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';
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
          <Row
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              // В данном фрагменте кода задаются значения для анимации на основе реальной позиции элементов на экране
              // y - расстояние от центра экрана до View с ControlSection's
              let y =
                Theme.Dimensions.screenHeight / 2 -
                (layout.height / 2 + layout.y);
              y = StatusBar.currentHeight ? y - StatusBar.currentHeight : y;
              Theme.Animations.screens.musicControl.onUnmount.translate.Y.toValue = -y;
              Theme.Animations.screens.musicControl.initial.translateYValue = -y;
              Theme.Animations.screens.networkControl.onUnmount.translate.Y.toValue = -y;
              Theme.Animations.screens.networkControl.initial.translateYValue = -y;
              const x = layout.width / 4;
              Theme.Animations.screens.musicControl.onUnmount.translate.X.toValue = x;
              Theme.Animations.screens.musicControl.initial.translateXValue = x;
              Theme.Animations.screens.networkControl.onUnmount.translate.X.toValue = -x;
              Theme.Animations.screens.networkControl.initial.translateXValue = -x;
            }}>
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
              initiallyEnabled
            />
            <ButtonSquared
              icon={'phone'}
              iconDisabled={'phone-slash'}
              initiallyEnabled
            />
            <ButtonSquared
              icon={'bell'}
              iconDisabled={'bell-slash'}
              initiallyEnabled
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
