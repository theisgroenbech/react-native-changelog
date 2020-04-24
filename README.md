# react-native-changelog

[![npm version](https://badge.fury.io/js/react-native-changelog.svg)](https://badge.fury.io/js/react-native-changelog)
[![Platform](https://img.shields.io/badge/react--native-0.61-blue.svg)](http://facebook.github.io/react-native/)

Modal component that visualises changelogs as timelines.
Made for React Native and based on the expo core for automatic versioning.

A big thank you to [thegamenicorus](https://github.com/thegamenicorus/react-native-timeline-listview) and [eugnis](https://github.com/Eugnis/react-native-timeline-flatlist) for the work on the timeline component.

## Installation

```bash
npm install react-native-changelog
```

## Changelog Usage

```js
import {Changelog} from "react-native-changelog";

const changes =
    [{
        version: 'V2.3',
        date: '16. January 2020',
        changes:
            '- New menu items\n' +
            '- Added support for Danish language\n' +
            '- Minor changes'
    },{
        version: 'V2.2',
        date: '27. November 2019',
        changes:
            '- Minor bug fixes'
    }];

() => (
  <Changelog
                changelog={changes}
                show={true}
            />
);
```
 ## Managed Changelog Usage

This is a convenience component for automatic management of whether the user has seen the dialog for a given version. This is done by saving the current version of the app in AsyncStorage when the dialog is closed. In the example below, the version is taken from Expo Constants.

```js
import {ManagedChangelog} from "react-native-changelog";
import Constants from "expo-constants";

const changes =
    [{
        version: 'V2.3',
        date: '16. January 2020',
        changes:
            '- New menu items\n' +
            '- Added support for Danish language\n' +
            '- Minor changes'
    },{
        version: 'V2.2',
        date: '27. November 2019',
        changes:
            '- Minor bug fixes'
    }];

() => (
  <ManagedChangelog changelog={changes} version={Constants.manifest.version}/>
);
```
## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             | Default        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **`backdropColor`**               | Color used for the background behind the dialog                                                                                                                                                                                                                                         | `#125688`          |
| **`buttonText`** | Text of the OK button                                                                                                                                                                                                                                                                                 | `Okay`        |
| **`changelog`**            | List of changes in the format of objects containing the following keys: `version`, `date`, `changes`. See example below.                                                                                                                                                                                                                                                                                  | `[]`          |
| **`color`**           | Primary color used for bullets and button                                                                                                                                                                                                                                                                              | `#2d9cdb`         |
| **`colorDarker`**     | Secondary color used for version tags                                                                                                                                                                                                                                                                           | `#125688`            |
| **`onClose`**              | Callback when the dialog is closed. | `() => {}` |
| **`show`**               | Boolean controlling whether the dialog is shown (only for **`Changelog`**)                                                                                                                                                                                                                                                                                       | `false`                |
| **`title`**      | Title of the dialog                                                                                                                                                                                                                   | `Since last time 👋!`     |
| **`version*`**      | Version used for automatic showing of the dialog (only for **`ManagedChangelog`**)                                                                                                                                                                                                                   | `""`     |

*Required for ManagedChangelog.
## Screenshots

<img src="https://raw.githubusercontent.com/theisgroenbech/react-native-changelog/master/screenshots/2.png" width="40%" height="40%"><img src="https://raw.githubusercontent.com/theisgroenbech/react-native-changelog/master/screenshots/1.png" width="40%" height="40%">

## Example

Check full example in the `example` folder.

```js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ManagedChangelog} from "react-native-changelog";
import Constants from "expo-constants";
const changes =
    [{
        version: 'V2.3',
        date: '16. January 2020',
        changes:
            '- New menu items\n' +
            '- Added support for Danish language\n' +
            '- Minor changes'
    },{
        version: 'V2.2',
        date: '27. November 2019',
        changes:
            '- Minor bug fixes'
    }];

export default function App() {
    return (
        <View style={styles.container}>
            <ManagedChangelog changelog={changes} version={Constants.manifest.version} />
            <Text>Changelog example</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
```
## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Theis Grønbech Petersen 2020
