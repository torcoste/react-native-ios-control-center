# react-native-typescript
React Native Typescript template

## Set icon

### iOS
``` yarn setIcon ```
### Android
Open Android Studio
``` yarn androidStudio ```
Right click on the `app` folder, then click on `New` and then click on `Image Asset`. If you don't see this menu, be sure that you got the latest gradle version (should work with gradle >=3.4.2)
In the `Icon Type` field select `Launcher Icons (Adaptative and Legacy)`
In the `path` field, select your image file
Once done, click on the `Next` button and then on the `finish` button

## Set splash

### Android
``` yarn setSplash ```
### iOS
Open XCode project
``` yarn xcode ```
and change `LaunchScreen.xib` as you want
