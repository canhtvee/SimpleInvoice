# Project Overview

## Developement Environment

- [Node.js v19.7.0](https://nodejs.org/en/blog/release/v19.7.0/)
- [Xcode 14.1 (14B47b)](https://developer.apple.com/news/releases/?id=11012022a)
- [Cocoapods 1.11.3](https://cocoapods.org)
- [JDK 17.0.2](https://www.oracle.com/java/technologies/javase/17-0-2-relnotes.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/), [@react-navigation/native](https://reactnavigation.org/) and [react-native-screens](https://reactnavigation.org/) as navigation libraries.
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/react/overview) for data fetching solution.
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) for local storage solution.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Folder structure ([checkout here for more detail](https://github.com/canhtvee/SimpleInvoice/master/docs/DependencyGraph.md))

The project structure is very simple:

- `src`: This folder is the main container of all the code inside your application.
  - `commons`: Folder to store any common modules that you use through your app (such as a generic button)
  - `containers`: Folder to store screens's wrappers (most of containers are navigators).
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.js`
  - `utils`: Folder to store any kind of constant, the `resources` folder to store all images, vectors, etc. Common function connect to server, store value in local, etc.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Production Checklist

- Changes api host in `system.js`

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Scripts

- run `yarn test` to run unit test
- run `yarn ios` to run ios app in debug mode
- run `yarn android` to run android app in debug mode
