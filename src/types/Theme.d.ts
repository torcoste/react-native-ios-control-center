import {ImageSourcePropType} from 'react-native';

export interface ITheme {
  Fonts: {
    primary: string;
    alternative: string;
  };

  Indents: {
    xxxl: number;
    xxl: number;
    xl: number;
    lg: number;
    md: number;
    sm: number;
    dynamic: {
      sliderControlIcon: number;
      buttonRoundedWithCaptionMargin: number;
    };
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
      songTitle: {
        firstLine: number;
        secondLine: number;
      };
    };
  };

  Images: {
    backgroundImage: ImageSourcePropType;
    iTunesIcon: ImageSourcePropType;
  };

  Colors: {
    transparent: string;
    semiWhite: string;
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
    screens: {
      musicControl: {
        songImageWrapper: string;
      };
    };
  };

  Animations: {
    sections: {
      default: {
        initialValue: number;
        pressIn: {
          toValue: number;
        };
        pressOut: {
          toValue: number;
          friction: number;
          tension: number;
        };
      };
    };
    sliders: {
      default: {
        initialValue: number;
        pressIn: {
          toValue: number;
        };
        pressOut: {
          toValue: number;
          friction: number;
          tension: number;
        };
      };
    };
    buttons: {
      default: {
        rounded: {
          initialValue: number;
          pressIn: {
            toValue: number;
          };
          pressOut: {
            toValue: number;
            friction: number;
            tension: number;
          };
        };
        squared: {
          initialValue: number;
          pressIn: {
            toValue: number;
          };
          pressOut: {
            toValue: number;
            friction: number;
            tension: number;
          };
        };
        rectangled: {
          initialValue: number;
          pressIn: {
            toValue: number;
          };
          pressOut: {
            toValue: number;
            friction: number;
            tension: number;
          };
        };
      };
    };
    screens: {
      musicControl: {
        initial: {
          scaleValue: number;
          translateYValue: number;
          translateXValue: number;
          backgroundOpacityValue: number;
          containerOpacityValue: number;
        };
        onMount: {
          scale: {
            toValue: number;
            duration: number;
          };
          translate: {
            Y: {
              toValue: number;
              duration: number;
            };
            X: {
              toValue: number;
              duration: number;
            };
          };
          opacity: {
            background: {
              toValue: number;
              duration: number;
            };
            container: {
              toValue: number;
              duration: number;
            };
          };
        };
        onUnmount: {
          scale: {
            toValue: number;
            duration: number;
          };
          translate: {
            Y: {
              toValue: number;
              duration: number;
            };
            X: {
              toValue: number;
              duration: number;
            };
          };
          opacity: {
            background: {
              toValue: number;
              duration: number;
            };
            container: {
              toValue: number;
              duration: number;
            };
          };
        };
      };
      networkControl: {
        initial: {
          scaleValue: number;
          translateYValue: number;
          translateXValue: number;
          backgroundOpacityValue: number;
          containerOpacityValue: number;
        };
        onMount: {
          scale: {
            toValue: number;
            duration: number;
          };
          translate: {
            Y: {
              toValue: number;
              duration: number;
            };
            X: {
              toValue: number;
              duration: number;
            };
          };
          opacity: {
            background: {
              toValue: number;
              duration: number;
            };
            container: {
              toValue: number;
              duration: number;
            };
          };
        };
        onUnmount: {
          scale: {
            toValue: number;
            duration: number;
          };
          translate: {
            Y: {
              toValue: number;
              duration: number;
            };
            X: {
              toValue: number;
              duration: number;
            };
          };
          opacity: {
            background: {
              toValue: number;
              duration: number;
            };
            container: {
              toValue: number;
              duration: number;
            };
          };
        };
      };
    };
  };
}
