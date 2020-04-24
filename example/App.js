import React from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {Changelog, ManagedChangelog} from "react-native-changelog";
import Constants from "expo-constants";

const changes =
    [{
        version: 'V2.3',
        date: '16. January 2020',
        changes:
            '- New menu items\n' +
            '- Added support for Danish language\n' +
            '- Minor changes'
    }, {
        version: 'V2.2',
        date: '27. November 2019',
        changes:
            '- Minor bug fixes'
    }];
const setLastChangelog = async (value) => await AsyncStorage.setItem('lastShownChangelog', value);

export default function App() {
    // setLastChangelog("") TODO Uncomment this in order to reset the version
    return (
        <View style={styles.container}>
            <ManagedChangelog
                title={"Hi there!"} changelog={changes} color={"#4fa"}
                backdropColor={"#4fa"}
                colorDarker={'#1C7'}
                buttonText={"Cool story"}
                version={Constants.manifest.version}/>
            {/*<Changelog
                title={"Hi there!"} changelog={changes} color={"#4fa"}
                backdropColor={"#4fa"}
                colorDarker={'#1C7'}
                buttonText={"Cool story"}
                show={true}/>*/}
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
