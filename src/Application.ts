import {Navigation} from 'react-native-navigation';
import ApplicationWrapper from './components/ApplicationWrapper';
import {Screens, HOME_SCREEN, ABOUT_SCREEN} from './screens';

export default class Application {
  private static _instance: Application;

  private static get instance(): Application {
    if (!Application._instance) Application._instance = new Application();
    return Application._instance;
  }

  navigateAbout(componentId: string) {
    Navigation.push(componentId, {
      component: {
        name: ABOUT_SCREEN,
        options: {
          topBar: {title: {text: 'About'}},
        },
      },
    });
  }

  registry() {
    Screens.forEach((Screen, key) =>
      Navigation.registerComponent(key, () => ApplicationWrapper(Screen, this)),
    );

    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: HOME_SCREEN,
                  options: {
                    topBar: {title: {text: 'Home'}},
                  },
                },
              },
            ],
          },
        },
      });
    });
  }
}
