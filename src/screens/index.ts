import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

export const HOME_SCREEN = 'HomeScreen';
export const ABOUT_SCREEN = 'AboutScreen';

export const Screens = new Map();
Screens.set(HOME_SCREEN, HomeScreen);
Screens.set(ABOUT_SCREEN, AboutScreen);
