import HomeScreen from './HomeScreen';
import NetworkControlScreen from './NetworkControlScreen';
import MusicControlScreen from './MusicControlScreen';

export const HOME_SCREEN = 'HomeScreen';
export const NETWORK_CONTROL_SCREEN = 'NetworkControlScreen';
export const MUSIC_CONTROL_SCREEN = 'MusicControlScreen';

export const Screens = new Map();
Screens.set(HOME_SCREEN, HomeScreen);
Screens.set(NETWORK_CONTROL_SCREEN, NetworkControlScreen);
Screens.set(MUSIC_CONTROL_SCREEN, MusicControlScreen);
