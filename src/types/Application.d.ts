export default class Application {
  navigateNetworkControl(componentId: string): void;
  navigateMusicControl(componentId: string): void;
  navigateDismissOverlay(componentId: string): void;
}

export interface ScreenProps {
  componentId: string;
  Application: Application;
}
