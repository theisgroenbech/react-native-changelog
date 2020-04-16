# react-native-changelog

Changelog modal component for React Native using timelines.

JavaScript, based on the Expo core for automatic versioning.

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

This is a convenience component for automatic management of whether the user has seen the dialog for a given version. This is done by saving the current version of the app in AsyncStorage when the dialog is closed.

```js
import {ManagedChangelog} from "react-native-changelog";

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
  <ManagedChangelog changelog={changes} />
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

## Screenshots
<img src="https://raw.githubusercontent.com/theisgroenbech/react-native-changelog/master/screenshots/2.png" width="40%" height="40%"><img src="https://raw.githubusercontent.com/theisgroenbech/react-native-changelog/master/screenshots/1.png" width="40%" height="40%">

## Example

Check full example in the `Example` folder.

```js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ManagedChangelog} from "react-native-changelog";

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
            <ManagedChangelog changelog={changes} />
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
