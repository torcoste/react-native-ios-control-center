import {ImageSourcePropType} from 'react-native';

export interface ITheme {
  Fonts: {
    primary: string;
    alternative: string;
  };

  Indents: {
    lg: number;
    md: number;
    sm: number;
    dynamic: {
      sliderControlIcon: number;
    }
  };

  Dimensions: {
    screenHeight: number;
    screenWidth: number;
  };

  Borders: {
    radius: number;
    circle: number;
  };

  Sizes: {
    icon: {
      default: number;
      rounded: number;
      squared: number;
      rectangled: number;
      custom: {
        bluetooth: number;
      };

      musicControlSection: {
        play: number;
        wards: number;
      };
      sliderControl: number;
    };
    font: {
      button: {
        default: number;
      };
    };
  };

  Images: {
    backgroundImage: ImageSourcePropType;
  };

  Colors: {
    transparent: string;
    buttons: {
      default: {
        squared: {
          disabledBackground: string;
          enabledBackground: string;
          disabledIcon: string;
          enabledIcon: string;
        };
        rectangled: {
          disabledBackground: string;
          enabledBackground: string;
          disabledIcon: string;
          enabledIcon: string;
          disabledText: string;
          enabledText: string;
        };
        rounded: {
          disabledBackground: string;
          enabledBackground: string;
          disabledIcon: string;
          enabledIcon: string;
        };
      };
      custom: {
        rounded: {
          plane: {
            enabledBackground: string;
          };
          mobileData: {
            enabledBackground: string;
          };
          wifi_bluetooth: {
            disabledBackground: string;
            disabledIcon: string;
          };
          airDrop: {};
          personalHotspot: {};
        };
      };
    };
    sections: {
      default: {
        background: string;
      };
      musicControl: {
        icons: {
          play: string;
          wards: string;
        };
      };
    };
    sliderControl: {
      background: string;
      icon: string;
    };
  };
}
