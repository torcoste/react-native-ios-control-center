export default class Application {
  navigateAbout(componentId: string): void;
}

export interface ScreenProps {
  componentId: string;
  Application: Application;
}
