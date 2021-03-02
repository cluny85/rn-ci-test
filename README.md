# React Native Boilerplate

This is a project customized from template: [react-native-template](https://github.com/echobind/react-native-template)

## Table of Contents

- [Getting Started](getting-started)
  - [Prerequisites](prerequisites)
  - [Installing](installing)
- [Develop for Accessibility](develop-for-accessibility)
- [Running The Tests](running-the-tests)
  - [E2E Tests](e2e-tests)
- [Deployment](deployment)
- [Built With](built-with)


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the app to the respective app stores.

### Prerequisites

In order to get this project running locally, please make sure you ahve followed the "React Native CLI Quickstart" in the [React Native "Getting Started"](https://facebook.github.io/react-native/docs/getting-started) guide.

For **IOS** before you start, you need to have this installed:

- xcode-utils
Open Xcode > preferences > Locations > Command line tools => select xcode version elegible

- Cocoapods
Open cmd and:
```
brew install cocoapods
```

- applesimutils
Open cmd and:
```
brew tap wix/brew
brew install applesimutils
```
For **ANDROID** before you start, you need to have this installed:

Java JDK, link ref for help: [link](https://mkyong.com/java/how-to-install-java-on-mac-osx/)
```
brew install openjdk@8

sudo ln -sfn /usr/local/opt/openjdk@8/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-8.jdk
```

### Installing

To get the app running locally, please follow these steps:

1. From the root, install the JavaScript dependencies:

```sh
yarn install
```

2. Install the iOS dependencies:

```sh
cd ios && pod install
```

2. Start the app on iOS by running:

```sh
yarn ios
```

4. Start the app on Android by running (make sure you have a device running on the emulator):

```sh
yarn android
```

If all worked correctly, you should have the app running on both the iOS and Android simulators.


## Develop for Accessibility

Mobile applications should be developed with accessbility in mind. Some simple steps to take include adding accessbility labels and roles to elements within your screens. Some convience features have been added to the Styled Text and Button component to ensure the ease of use.


## Running the tests

We use `jest` for testing business logic and functions. To run the test suites, run:

```sh
yarn test
```


### E2E Tests

End to End (E2E) tests are for full integration tests, clicks, screen elements, etc. For this we use [Detox](https://github.com/wix/Detox/)

To run tests you must have the applesimutils installed per the [Getting Started on Detox](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md). Tests can be run locally for iOS and Android with the following commands:

```sh
yarn e2e:ios-debug
yarn e2e:ios
yarn e2e:android-debug
yarn e2e:android
```
Each of these will test the platform in either release or debug mode as specified.

**TROUBLESHOOTING**

- Android

+ If you get a message like this:
```
Failed to install the following Android SDK packages as some licences have not been accepted.
     build-tools;29.0.2 Android SDK Build-Tools 29.0.2
     platforms;android-29 Android SDK Platform 29
  To build this project, accept the SDK license agreements and install the missing components using the Android Studio SDK Manager.
  Alternatively, to transfer the license agreements from one workstation to another, see http://d.android.com/r/studio-ui/export-licenses.html
```

You need to open android studio and download and accept the license of the required version. You shouldn't have this problems but are some dependencies that can mess around.

+ If cannot find the var ```ANDROID_HOME``` or ```ANDROID_SDK_ROOT``` is possible you need to add this line in you **~/.zshrc** (macos above catalina) or in the ~/.bash_profile (in versions under macos catalina)
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**EXTRA TIP**: You can check the .github/workflows/android.yml it can make you see how it works automatically on remote macos instance.

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [React Native](https://facebook.github.io/react-native/) - The mobile framework used
- [TypeScript](https://typescriptlang.org/) - Static typing
- [styled-system](https://emotion.sh/) - the system we levarage for styling components
- [Emotion](https://emotion.sh/) - CSS-in-JS (used with `styled-system`)
