import {Navigation} from 'react-native-navigation';
import ApplicationWrapper from './components/Wrappers/ApplicationWrapper';
import {
  Screens,
  HOME_SCREEN,
  NETWORK_CONTROL_SCREEN,
  MUSIC_CONTROL_SCREEN,
} from './screens';

export default class Application {
  private static _instance: Application;

  private static get instance(): Application {
    if (!Application._instance) Application._instance = new Application();
    return Application._instance;
  }

  navigateNetworkControl(componentId: string) {
    Navigation.showOverlay({
      component: {
        name: NETWORK_CONTROL_SCREEN,
      },
    });
  }

  navigateMusicControl(componentId: string) {
    Navigation.showOverlay({
      component: {
        name: MUSIC_CONTROL_SCREEN,
      },
    });
  }

  navigateDismissOverlay(componentId: string) {
    Navigation.dismissOverlay(componentId);
  }

  registry() {
    Screens.forEach((Screen, key) =>
      Navigation.registerComponent(key, () => ApplicationWrapper(Screen, this)),
    );

    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setDefaultOptions({
        topBar: {
          visible: false,
        },
        statusBar: {},
        animations: {},
      });

      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: HOME_SCREEN,
                },
              },
            ],
          },
        },
      });
    });
  }
}
